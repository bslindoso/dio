import { Account } from "./Account";

export class CompanyAccouny extends Account {
  cnpj: number;

  constructor(name: string, accountNumber: number, cnpj: number) {
    super(name, accountNumber);
    this.cnpj = cnpj;

    console.log(this.printNewInstance() + `
  => CNPJ: ${this.cnpj}`)
  }

  getLoan = (value: number): void => {
    console.log(`Loan of $${value} requested. Loan approved!`);
    this.deposit(value);
  }

  setCnpj = (cnpj: number): void => {
    this.cnpj = cnpj;
  }

  getCnpj = (): number => {
    return this.cnpj;
  }
}