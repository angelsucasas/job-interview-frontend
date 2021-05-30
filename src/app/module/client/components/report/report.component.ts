import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../http/http.service'
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../../../environments/environment'
import { employee_URL, TRANSACTION_URL} from '../../../../config/constants'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }

  invoiceDataForm = new  FormGroup({
    targetAccount : new FormControl(''),
    secondName: new FormControl(''),
    firstLastname: new FormControl(''),
    secondLastName: new FormControl(''),
    position: new FormControl(''),
    deparment : new FormControl(''),
  })
  public today = new Date();
  public month = this.today.getMonth();
  public year = this.today.getFullYear();

  minimunDate = new  FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16))
  })

  maximunDate = new  FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19))
  })
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  public employeesAccounts: any;
  public transactions: any;
  public showMessageFlag =0;
  public AccountNotSelected=0;
  public employeeName="";
  public employeePosition="";
  public employeeDeparment="";
  public employeeSupervisor="";
  public totalAmount=0;
  public currentEmployeeTransactions:any


  async ngOnInit(): Promise<void> {
    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE_ACCOUNT).subscribe((data: any)=>{
      console.log(data)
      this.employeesAccounts = data;
    })

    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+TRANSACTION_URL.TRANSACTION).subscribe((data: any)=>{
      console.log(data)
      this.transactions = data;
    })
  }
  
  onSubmit(){
    this.AccountNotSelected=1;  
    this.currentEmployeeTransactions = this.elementsWithThisId(this.invoiceDataForm.controls.targetAccount.value,this.transactions,"accountid")    
    let currentEmployee = this.elementsWithThisId(this.invoiceDataForm.controls.targetAccount.value,this.employeesAccounts,"accountid")
    this.employeeName = currentEmployee[0].firstname+' '+currentEmployee[0].firstlastname
    this.employeePosition = currentEmployee[0].position
    this.employeeDeparment = currentEmployee[0].deparment
    this.employeeSupervisor = "Carlos Perez"//currentEmployee.supervisor
    this.totalAmount = this.getCurrentEmployeeTransactionsTotalAmount(this.currentEmployeeTransactions)
  }

  elementsWithThisId(query:any, transactions:any,searchKey:string){
    return transactions.filter(function(element:any) {
      return element[searchKey]==query? element.accountid:null
    })
  }

  getCurrentEmployeeTransactionsTotalAmount(transactions:any){
    let totalAmount = 0
    for(let transaction of transactions){
      totalAmount+= parseInt(transaction.amount)
    }
    return totalAmount
  }
}
