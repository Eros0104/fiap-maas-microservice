import { v4 as uuid } from "uuid";
import { User } from "../models";
import { Request, Response } from "express";
import Database from "../database";

class UsersController {
  db: Database;

  constructor() {
    this.db = Database.getInstance();
  }

  getAll(req: Request, res: Response) {
    const users = this.db.getAllUsers();
    res.json(users);
  }

  getById(req: Request, res: Response) {
    const { id } = req.params;
    const user = this.db.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).end();
    }
  }

  create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const user = new User(uuid(), name, email, password);
    this.db.addUser(user);
    res.status(201).json(user);
  }

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const userToUpdate = new User(id, name, email, password);
    this.db.updateUser(id, userToUpdate);
    res.status(204).end();
  }

  delete(req: Request, res: Response) {
    const { id } = req.params;
    this.db.deleteUser(id);
    res.status(204).end();
  }
}

export default UsersController;
