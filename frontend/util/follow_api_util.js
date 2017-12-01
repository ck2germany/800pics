export const postFollow = (uid) => (
  $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { uid }
  })
);

export const deleteFollow = (uid) => (
  $.ajax({
    url: `/api/follows`,
    method: 'DELETE',
    data: { uid }
  })
);
