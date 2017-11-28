
export const getPhotosArray = ({photos}) => (
  Object.keys(photos).map(id => photos[id])
);
