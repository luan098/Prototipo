import api from "src/API/config";

class AuthService {
  body: { [key: string]: string | number };

  constructor() {
    this.body = { ...api.body };
  }

  async loginByAuth(email: string, password: string) {
    try {
      const { data } = await api.axios.post("auth/login", {
        email,
        password,
        ...this.body,
      });

      return data;
    } catch (error) {
      return null;
    }
  }
}

// import { removeWindowClass } from "src/Utils/helpers";

// export const loginByAuth = async (email: string, password: string) => {
//   const token = "blatoken";
//   localStorage.setItem("token", token);
//   removeWindowClass("login-page");
//   removeWindowClass("hold-transition");
//   return token;
// };

export default new AuthService();
