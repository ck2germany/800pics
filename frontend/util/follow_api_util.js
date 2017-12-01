export const postFollow = (id) => (
  $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { id }
  })
);

export const deleteFollow = (id) => (
  $.ajax({
    url: `/api/follows/${id}`,
    method: 'DELETE'
  })
);
