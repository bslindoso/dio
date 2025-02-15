import { CustomerAccount } from "./classes/customer_account";
import { EmployeeAccount } from "./classes/employee_account";

export default () => {
  const customer_account: CustomerAccount = new CustomerAccount('John Doe', 123456, 2345678);

  const employee_account: EmployeeAccount = new EmployeeAccount('Jane Doe', 654321);

  console.log(customer_account);
  customer_account.deposit(500);
  customer_account.showBalance();
  customer_account.setDocument(123456789);
  console.log('Document:', customer_account.getDocument());

  console.log('==================================')

  console.log(employee_account);
  employee_account.deposit(2000);
  employee_account.showBalance();

}