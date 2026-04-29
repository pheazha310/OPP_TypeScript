import { Request, Response } from "express";
import User from "../models/User";

class UserController {

  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      const result = await User.create(name, email);

      res.status(201).json({
        message: "User created",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await User.findById(Number(id));

      res.json(user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      await User.update(Number(id), name, email);

      res.json({ message: "User updated" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await User.delete(Number(id));

      res.json({ message: "User deleted" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default UserController;