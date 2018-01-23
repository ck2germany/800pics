The approach I suggest is a bit verbose but I found it to scale pretty well into complex apps. When you want to show a modal, fire an action describing which modal you'd like to see:

Dispatching an Action to Show the Modal
this.props.dispatch({
  type: 'SHOW_MODAL',
  modalType: 'DELETE_POST',
  modalProps: {
    postId: 42
  }
})
(Strings can be constants of course; I’m using inline strings for simplicity.)

Writing a Reducer to Manage Modal State
Then make sure you have a reducer that just accepts these values:

const initialState = {
  modalType: null,
  modalProps: {}
}

function modal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case 'HIDE_MODAL':
      return initialState
    default:
      return state
  }
}

/* .... */

const rootReducer = combineReducers({
  modal,
  /* other reducers */
})
Great! Now, when you dispatch an action, state.modal will update to include the information about the currently visible modal window.

Writing the Root Modal Component
At the root of your component hierarchy, add a <ModalRoot> component that is connected to the Redux store. It will listen to state.modal and display an appropriate modal component, forwarding the props from the state.modal.modalProps.

// These are regular React components we will write soon
import DeletePostModal from './DeletePostModal'
import ConfirmLogoutModal from './ConfirmLogoutModal'

const MODAL_COMPONENTS = {
  'DELETE_POST': DeletePostModal,
  'CONFIRM_LOGOUT': ConfirmLogoutModal,
  /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span /> // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)
What have we done here? ModalRoot reads the current modalType and modalProps from state.modal to which it is connected, and renders a corresponding component such as DeletePostModal or ConfirmLogoutModal. Every modal is a component!

Writing Specific Modal Components
There are no general rules here. They are just React components that can dispatch actions, read something from the store state, and just happen to be modals.

For example, DeletePostModal might look like:

import { deletePost, hideModal } from '../actions'

const DeletePostModal = ({ post, dispatch }) => (
  <div>
    <p>Delete post {post.name}?</p>
    <button onClick={() => {
      dispatch(deletePost(post.id)).then(() => {
        dispatch(hideModal())
      })
    }}>
      Yes
    </button>
    <button onClick={() => dispatch(hideModal())}>
      Nope
    </button>
  </div>
)

export default connect(
  (state, ownProps) => ({
    post: state.postsById[ownProps.postId]
  })
)(DeletePostModal)
The DeletePostModal is connected to the store so it can display the post title and works like any connected component: it can dispatch actions, including hideModal when it is necessary to hide itself.

Extracting a Presentational Component
It would be awkward to copy-paste the same layout logic for every “specific” modal. But you have components, right? So you can extract a presentational <Modal> component that doesn’t know what particular modals do, but handles how they look.

Then, specific modals such as DeletePostModal can use it for rendering:

import { deletePost, hideModal } from '../actions'
import Modal from './Modal'

const DeletePostModal = ({ post, dispatch }) => (
  <Modal
    dangerText={`Delete post ${post.name}?`}
    onDangerClick={() =>
      dispatch(deletePost(post.id)).then(() => {
        dispatch(hideModal())
      })
    })
  />
)

export default connect(
  (state, ownProps) => ({
    post: state.postsById[ownProps.postId]
  })
)(DeletePostModal)
It is up to you to come up with a set of props that <Modal> can accept in your application but I would imagine that you might have several kinds of modals (e.g. info modal, confirmation modal, etc), and several styles for them.

Accessibility and Hiding on Click Outside or Escape Key
The last important part about modals is that generally we want to hide them when the user clicks outside or presses Escape.

Instead of giving you advice on implementing this, I suggest that you just don’t implement it yourself. It is hard to get right considering accessibility.

Instead, I would suggest you to use an accessible off-the-shelf modal component such as react-modal. It is completely customizable, you can put anything you want inside of it, but it handles accessibility correctly so that blind people can still use your modal.

You can even wrap react-modal in your own <Modal> that accepts props specific to your applications and generates child buttons or other content. It’s all just components!

Other Approaches
There is more than one way to do it.

Some people don’t like the verbosity of this approach and prefer to have a <Modal> component that they can render right inside their components with a technique called “portals”. Portals let you render a component inside yours while actually it will render at a predetermined place in the DOM, which is very convenient for modals.

In fact react-modal I linked to earlier already does that internally so technically you don’t even need to render it from the top. I still find it nice to decouple the modal I want to show from the component showing it, but you can also use react-modal directly from your components, and skip most of what I wrote above.

I encourage you to consider both approaches, experiment with them, and pick what you find works best for your app and for your team.
