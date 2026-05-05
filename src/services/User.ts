import UserModel from "../models/User";

export interface CreateUserPayload {
  name: string;
  email: string;
}

export interface UpdateUserPayload {
  name: string;
  email: string;
}

class UserService {
  static async createUser(payload: CreateUserPayload) {
    const { name, email } = payload;

    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    return UserModel.create(name, email);
  }

  static async getUsers() {
    return UserModel.findAll();
  }

  static async getUserById(id: number) {
    if (Number.isNaN(id)) {
      throw new Error("Invalid user id");
    }

    return UserModel.findById(id);
  }

  static async updateUser(id: number, payload: UpdateUserPayload) {
    const { name, email } = payload;

    if (Number.isNaN(id)) {
      throw new Error("Invalid user id");
    }

    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const existingUser = await UserModel.findById(id);

    if (!existingUser) {
      return null;
    }

    await UserModel.update(id, name, email);

    return UserModel.findById(id);
  }

  static async deleteUser(id: number) {
    if (Number.isNaN(id)) {
      throw new Error("Invalid user id");
    }

    const existingUser = await UserModel.findById(id);

    if (!existingUser) {
      return false;
    }

    await UserModel.delete(id);

    return true;
  }
}

export default UserService;
