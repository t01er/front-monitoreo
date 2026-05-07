import apiexternal from "../../../services/apiExternal";

export const getTechnicals = () => {
  return apiexternal.get("/technical");
};


export const createTechnical = (data) => {
  return apiexternal.post("/technical", data);
};


export const updateTechnical = (id, data) => {
  return apiexternal.put(`/technical/${id}`, data);
};


export const getProjectIds = () => {
  return apiexternal.get("/technical/projects-ids");
};