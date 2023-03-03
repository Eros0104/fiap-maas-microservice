import { User } from "../models";

class Database {
  private static instance: Database;
  users: User[];

  private constructor() {
    this.users = [];
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  updateUser(id: string, userToUpdate: User) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users[index] = userToUpdate;
    }
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}

export default Database;
