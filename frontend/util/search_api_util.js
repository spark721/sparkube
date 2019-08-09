
// send search query to backend
export const searchVideos = (query) => {
  return $.ajax({
    type: `GET`,
    url: `/api/search`,
    data: { query }
  });
};