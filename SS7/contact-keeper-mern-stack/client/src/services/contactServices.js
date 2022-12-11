import axiosInstance from "./axiosInstance";

const ContactService = {
  getAll: () => axiosInstance.get("/contacts"),
  getById: (id) => axiosInstance.get(`/contacts/${id}`),
  update: (id, contact) => axiosInstance.put(`contacts/${id}`, contact),
  create: (contact) => axiosInstance.post("/contacts", contact),
  delete: (id) => axiosInstance.delete(`/contacts/${id}`),
};

export default ContactService;
