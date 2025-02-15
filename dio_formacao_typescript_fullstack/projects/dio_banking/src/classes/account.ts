// name, accountNumber, balance, deposit, withdraw, showBalance

export abstract class Account {

  name: string;
  accountNumber: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (value: number) => {
    this.balance += value;
    console.log(`Deposit of $${value} made. New balance is $${this.balance}`);
  }

  withdraw = (value: number) => {
    this.balance -= value;
    console.log(`Withdraw of $${value} made. New balance is $${this.balance}`);
  }

  showBalance = () => {
    console.log(`Balance: $${this.balance}`);
  }

}
