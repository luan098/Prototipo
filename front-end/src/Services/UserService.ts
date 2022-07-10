import api from "src/Components/API/config";

class UserService {
  body: { [key: string]: string | number };

  constructor() {
    this.body = { ...api.body };
  }

  async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    try {
      const { data } = await api.axios.post("users", {
        ...this.body,
        ...userData,
      });

      return data;
    } catch (error) {
      return null;
    }
  }

  async listUser() {
    try {
      const { data } = await api.axios.get("users", this.body);

      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new UserService();
