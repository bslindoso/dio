export abstract class Account {

  // attributes
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  // constructor
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // methods
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Depositing $${value} from ${this.name} account... New balance: $${this.balance}`);
    }
  }

  withdraw = (value: number): void => {
    this.balance -= value;
    console.log(`Withdrawing $${value} from ${this.name} account... New balance: $${this.balance}`);
  }

  // getters and setters
  setName = (name: string): void => {
    console.log(`Changing name from ${this.name} to ${name}...`);
    this.name = name;
  }

  getName = (): string => {
    console.log(`Getting name from ${this.name}...`);
    return this.name;
  }

  getAccountNumber = (): number => {
    console.log(`Getting account number from ${this.accountNumber}...`);
    return this.accountNumber;
  }

  getBalance = (): number => {
    console.log(`Getting balance from ${this.name} account...`);
    return this.balance;
  }

  setStatus = (status: boolean): void => {
    console.log(`Changing status from ${this.status} to ${status}...`);
    this.status = status;
  }

  // verify if account is active
  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Account is inactive!');
  }

  protected printNewInstance = (): string => {
    return `🪙  New ${this.constructor.name} created:
  => Name: ${this.name}
  => Account Number: ${this.accountNumber}
  => Balance: ${this.balance}`
  }
}
