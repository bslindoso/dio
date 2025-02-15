import { Account } from "./Account";

export class CustomerAccount extends Account {
  document?: number;

  constructor(name: string, accountNumber: number, document?: number) {
    super(name, accountNumber);
    this.document = document;

    console.log(this.printNewInstance() + `
  => Document: ${this.document}`)

  }

  setDocument = (document: number) => {
    this.document = document;
    console.log(`Setting document from ${this.document} to ${document}...`);
  }

  getDocument = () => {
    console.log(`Getting document from ${this.document}...`);
    return this.document;
  }
}