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

export const patchPhoto = (photo) => (
  $.ajax({
    url: `api/photos/${photo.id}`,
    method: 'PATCH',
    data: photo,
  })
);

export const postPhoto = (photo) => (
  $.ajax({
    url: 'api/photos',
    method: 'POST',
    data: photo
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'DELETE'
  })
);
