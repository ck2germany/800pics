import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import modalsReducer from './modalsReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  modal: modalsReducer,
});

export default rootReducer;
