import axios, { AxiosInstance } from "axios";

interface Api {
  axios: AxiosInstance;
  url: string;
  body: {};
}

const url = "http://127.0.0.1:3001/";
const axiosInstance = axios.create({
  baseURL: `${url}`,
});

const api: Api = {
  axios: axiosInstance,
  body: {},
  url,
};

export default api;
