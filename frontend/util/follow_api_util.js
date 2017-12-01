export const postFollow = (puId, cuId) => (
  $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { puId, cuId }
  })
);

export const deleteFollow = (id, cuId) => (
  $.ajax({
    url: `/api/follows/${id}`,
    method: 'DELETE',
    data: { cuId }
  })
);
