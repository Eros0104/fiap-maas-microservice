import Interface from "../interfaces/userInterface";

class User implements Interface {
  id;
  name;
  email;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export default User;
