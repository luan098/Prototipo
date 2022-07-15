import { toast } from "react-toastify";
import api from "src/API/config";

class AuthService {
  body: { [key: string]: string | number };

  constructor() {
    this.body = { ...api.body };
  }

  async loginByAuth(email: string, password: string) {
    const { data } = await api.axios.post("auth/login", {
      username: email,
      password,
      ...this.body,
    });

    return data || "";
  }
}

export default new AuthService();
