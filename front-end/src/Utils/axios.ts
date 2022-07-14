import axios, { AxiosRequestConfig } from "axios";
import { logoutUser } from "src/store/reducers/auth";
import store from "src/store/store";

const intance = axios.create({
  baseURL: `//localhost:3001/`,
});

intance.interceptors.request.use(
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

intance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.status === 401) {
      store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  }
);

export default intance;
