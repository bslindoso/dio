import { Account } from './Account';

export class EmployeeAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.deposit(20);

    console.log(this.printNewInstance())
  }
}