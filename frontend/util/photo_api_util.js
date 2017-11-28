export const getAllPhotos = () => (
  $.ajax({
    url: 'api/photos',
    method: 'GET'
  })
);

export const getPhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'GET'
  })
);
