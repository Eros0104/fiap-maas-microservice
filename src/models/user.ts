import { UserInterface } from "../interfaces";

class User implements UserInterface {
  id;
  name;
  email;
  password;

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
