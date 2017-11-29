export const getUserInfo = (id) => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);
