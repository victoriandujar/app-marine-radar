import axios from "axios";

const api = axios.create({
  baseURL: "http://hotline.whalemuseum.org/",
});

export default api;