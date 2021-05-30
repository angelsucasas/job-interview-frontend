import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../../http/http.service'
import { FormControl, FormGroup } from '@angular/forms';
import { Transaction } from 'src/app/model/transaction/transaction.model';
import { environment } from '../../../../../../environments/environment'
import { employee_URL, TRANSACTION_URL} from '../../../../../config/constants'


@Component({
  selector: 'app-transaction-register-form',
  templateUrl: './transaction-register-form.component.html',
  styleUrls: ['./transaction-register-form.component.css']
})
export class TransactionRegisterFormComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }
  
  public accounts: any;
  public showMessageFlag = 0;

  TransactionDataForm = new  FormGroup({
    amount : new FormControl(''),
    description: new FormControl(''),
    originAccountId: new FormControl(''),
    destinyAccountId: new FormControl(''),
  })

  async ngOnInit(): Promise<void> {
    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE_ACCOUNT).subscribe((data: any)=>{            
      this.accounts = data;
    })
  }

  onSubmit(){
    let transactionDto: Transaction={
      "amount": this.TransactionDataForm.controls.amount.value,
      "description": this.TransactionDataForm.controls.description.value,
      "originAccount": {
          id: this.TransactionDataForm.controls.originAccountId.value,
      },
      "destinyAccount":{
          id: this.TransactionDataForm.controls.destinyAccountId.value,
      }      
    }    
    this.httpClientService.sendPostRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+TRANSACTION_URL.TRANSACTION,transactionDto).subscribe((data: any)=>{      
      this.showMessageFlag=1
    })
  }
}
