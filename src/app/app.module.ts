import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportComponent } from './module/client/components/report/report.component';
import { NavbarComponent } from './module/common/navbar/navbar.component';
import { BackgroundFiguresComponent } from './module/common/background-figures/background-figures.component';
import { EmployeeRegisterFormComponent } from './module/client/components/employee/employee-register-form/employee-register-form.component';
import { EmployeeTableComponent } from './module/client/components/employee/employee-table/employee-table.component';
import { EmployeeDeleteComponent } from './module/client/components/employee/employee-delete/employee-delete.component';
import { AccountRegisterFormComponent } from './module/client/components/accounts/account-register-form/account-register-form.component';
import { AccountTableComponent } from './module/client/components/accounts/account-table/account-table.component';
import { AccountDeleteComponent } from './module/client/components/accounts/account-delete/account-delete.component';
import { TransactionRegisterFormComponent } from './module/client/components/transaction/transaction-register-form/transaction-register-form.component';
import { TransactionTableComponent } from './module/client/components/transaction/transaction-table/transaction-table.component';
import { TransactionDeleteComponent } from './module/client/components/transaction/transaction-delete/transaction-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {ClientModule} from './http/http.module'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    NavbarComponent,
    BackgroundFiguresComponent,
    EmployeeRegisterFormComponent,
    EmployeeTableComponent,
    EmployeeDeleteComponent,
    AccountRegisterFormComponent,
    AccountTableComponent,
    AccountDeleteComponent,
    TransactionRegisterFormComponent,
    TransactionTableComponent,
    TransactionDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
