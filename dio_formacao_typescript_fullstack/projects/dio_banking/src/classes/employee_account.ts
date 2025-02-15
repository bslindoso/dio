import { Account } from './account';

export class EmployeeAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.balance += 20;
  }
}