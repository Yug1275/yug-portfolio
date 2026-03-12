import axios from "axios";

const API = axios.create({
  baseURL: "https://yug-portfolio-backend.onrender.com"
});

export default API;