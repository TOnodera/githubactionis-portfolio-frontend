import axios from "axios";
import router from "@/router";

const http = axios.create({
  baseURL: "http://localhost:8888",
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push({ name: "Login" });
    }
    if (error.response.status === 422) {
      return error;
    }
  }
);

export default http;
