import { Account } from "./account";

export class CustomerAccount extends Account {
  document?: number;

  constructor(name: string, accountNumber: number, document?: number) {
    super(name, accountNumber);
    this.document = document;
  }

  setDocument = (document: number) => {
    this.document = document;
  }

  getDocument = () => {
    return this.document;
  }
}