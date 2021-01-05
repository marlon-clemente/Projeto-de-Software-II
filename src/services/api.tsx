import axio from "axios";

const api = axio.create({
  baseURL: "https://ps2-schools.herokuapp.com",
});

export default api;
