import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { logoutUser } from "src/store/reducers/auth";
import store from "src/store/store";

interface Api {
  axios: AxiosInstance;
  url: string;
  body: {};
}

const axiosParams = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use(
  (request: AxiosRequestConfig<any>) => {
    const { token } = store.getState().auth;
    if (token) {
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.status === 401) {
      store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  }
);

const api: Api = {
  axios: axiosInstance,
  body: {},
  url: axiosParams.baseURL,
};

export default api;
