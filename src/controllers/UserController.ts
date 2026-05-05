import { Request, Response } from "express";
import BaseController from "./baseController";
import UserService from "../services/User";

class UserController extends BaseController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const result = await UserService.createUser({ name, email });

      return this.created(res, result, "User created");
    } catch (error) {
      return this.fail(res, error);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      return this.ok(res, users, "Users fetched");
    } catch (error) {
      return this.fail(res, error);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(Number(id));

      if (!user) {
        return this.notFound(res, "User not found");
      }

      return this.ok(res, user, "User fetched");
    } catch (error) {
      return this.fail(res, error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await UserService.updateUser(Number(id), { name, email });

      if (!user) {
        return this.notFound(res, "User not found");
      }

      return this.ok(res, user, "User updated");
    } catch (error) {
      return this.fail(res, error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await UserService.deleteUser(Number(id));

      if (!deleted) {
        return this.notFound(res, "User not found");
      }

      return this.ok(res, null, "User deleted");
    } catch (error) {
      return this.fail(res, error);
    }
  }
}

export default new UserController();
