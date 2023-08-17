import API from "../../requester";

export const getMovieByIdAPI = async (id) => {
  const response = await API.get(`api/v2.2/films/${id}/videos`, {
    params: { id: id },
  });
  return response.data;
};
