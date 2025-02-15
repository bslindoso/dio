import { CompanyAccouny } from "./class/accounts/CompanyAccount";
import { CustomerAccount } from "./class/accounts/CustomerAccount";
import { EmployeeAccount } from "./class/accounts/EmployeeAccount";

export default () => {

  // console.log('================ customer ==================')

  // const customer_account: CustomerAccount = new CustomerAccount('John Doe', 123456, 2345678);
  // console.log(customer_account);
  // customer_account.deposit(500);
  // customer_account.getBalance();
  // customer_account.setDocument(123456789);
  // console.log('Document:', customer_account.getDocument());

  // console.log('================ employee ==================');

  // const employee_account: EmployeeAccount = new EmployeeAccount('Jane Doe', 654321);
  // console.log(employee_account);
  // employee_account.deposit(2000);
  // employee_account.getBalance();

  console.log('================ company ==================');

  const company_account = new CompanyAccouny('DIO', 987654, 123456789);
  company_account.deposit(10000);
  company_account.getLoan(5000);

}