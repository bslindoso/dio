export default () => {
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    showName = () => {
      console.log(this.name);
    }
  }

  const user: User = new User('Bruno', 38);
  user.showName();

  const otherUser: User = new User('Luisa', 30);
  otherUser.showName();

}