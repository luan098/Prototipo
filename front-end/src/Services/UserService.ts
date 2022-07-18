import api from "src/API/config";

class UserService {
  body: { [key: string]: string | number };

  constructor() {
    this.body = { ...api.body };
  }

  async createUser(userData: any) {
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

  async updateUser(id: string, userData: any) {
    if (userData && userData.password === "") delete userData.password;

    const { data } = await api.axios.patch(`users/${id}`, {
      ...this.body,
      ...userData,
    });

    return data;
  }

  async getUserById(id: string) {
    const { data } = await api.axios.get(`users/${id}`, {
      ...this.body,
    });

    return data;
  }

  async getProfile() {
    const { data } = await api.axios.get("profile", {
      ...this.body,
    });

    return data;
  }

  async listUser() {
    try {
      const { data } = await api.axios.get("users", this.body);

      return data;
    } catch (error) {
      return null;
    }
  }

  async delete(id: string) {
    try {
      const { data } = await api.axios.delete(`users/${id}`, this.body);

      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new UserService();
