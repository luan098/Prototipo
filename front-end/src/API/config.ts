import axios, { AxiosInstance } from "axios";
import { ProjectStorage } from "src/Hooks/useLocalStorage";

interface Api {
  axios: AxiosInstance;
  url: string;
  body: {};
}
const application_storage = localStorage?.application_storage as ProjectStorage;

const axiosParams = {
  baseURL: "//127.0.0.1:3001/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${application_storage?.jwt}`,
  },
};

const axiosInstance = axios.create(axiosParams);

const api: Api = {
  axios: axiosInstance,
  body: {},
  url: axiosParams.baseURL,
};

export default api;
