import axios, { AxiosInstance } from "axios";

interface Api {
  axios: AxiosInstance;
  url: string;
  body: {};
}

const url = "//127.0.0.1:3001/";
const axiosInstance = axios.create({
  baseURL: url,
  headers: { "Access-Control-Allow-Origin": "*" },
});

const api: Api = {
  axios: axiosInstance,
  body: {},
  url,
};

export default api;
