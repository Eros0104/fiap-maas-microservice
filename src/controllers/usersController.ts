import { v4 as uuid } from "uuid";
import User from "../models/user";
import { Request, Response } from "express";

class UsersController {
  users: User[];

  constructor() {
    this.users = [];
  }

  getUsers(req: Request, res: Response) {
    res.status(200).json(this.users);
  }

  createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = new User(uuid(), name, email);
    this.users.push(user);
    res.status(201).json(user);
  }

  updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email } = req.body;
    const index = this.users.findIndex((user) => user.id === id);

    if (index >= 0) {
      const updatedUser = new User(id, name, email);
      this.users[index] = updatedUser;
      res.status(200).json(updatedUser);
    } else {
      res.status(404).end();
    }
  }
}

export default UsersController;
