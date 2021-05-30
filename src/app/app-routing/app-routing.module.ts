import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router'
import { AccountTableComponent } from '../module/client/components/accounts/account-table/account-table.component';
import { AccountRegisterFormComponent } from '../module/client/components/accounts/account-register-form/account-register-form.component';
import { ReportComponent } from '../module/client/components/report/report.component';
import { EmployeeRegisterFormComponent } from '../module/client/components/employee/employee-register-form/employee-register-form.component';
import { EmployeeDeleteComponent } from '../module/client/components/employee/employee-delete/employee-delete.component';
import { EmployeeTableComponent } from '../module/client/components/employee/employee-table/employee-table.component';
import { AccountDeleteComponent } from '../module/client/components/accounts/account-delete/account-delete.component';
import { TransactionDeleteComponent } from '../module/client/components/transaction/transaction-delete/transaction-delete.component';
import { TransactionRegisterFormComponent } from '../module/client/components/transaction/transaction-register-form/transaction-register-form.component';
import { TransactionTableComponent } from '../module/client/components/transaction/transaction-table/transaction-table.component';

export const routes: Route[] = [  
  {path: "account/create", component: AccountRegisterFormComponent},
  {path: "account/delete", component: AccountDeleteComponent},
  {path: "account", component: AccountTableComponent},
  {path: "employee/create", component: EmployeeRegisterFormComponent},
  {path: "employee/delete", component: EmployeeDeleteComponent},
  {path: "employee", component: EmployeeTableComponent},  
  {path: "transaction/delete", component: TransactionDeleteComponent},
  {path: "transaction/create", component: TransactionRegisterFormComponent},
  {path: "transaction", component: TransactionTableComponent},
  {path: "report", component: ReportComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
