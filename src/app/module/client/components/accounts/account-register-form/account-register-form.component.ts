import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../../http/http.service'
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from 'src/app/model/account/account.model';
import { environment } from '../../../../../../environments/environment'
import { employee_URL} from '../../../../../config/constants'

@Component({
  selector: 'app-account-register-form',
  templateUrl: './account-register-form.component.html',
  styleUrls: ['./account-register-form.component.css']
})
export class AccountRegisterFormComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }

  public employees:any;
  public showMessageFlag = 0;

  accountDataForm = new  FormGroup({
    productNumber : new FormControl(''),
    currentAmount: new FormControl(''),
    employeId: new FormControl(''),
  })

  ngOnInit(): void {
    console.log(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE)
    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE).subscribe((data: any)=>{      
      this.employees = data;
    })
  }

  onSubmit(){
    let accontDto: Account={
      "currentAmount": this.accountDataForm.controls.currentAmount.value,
      "productNumber": this.accountDataForm.controls.productNumber.value,
      "employee":{
        id: this.accountDataForm.controls.employeId.value
      }   
    }

    this.httpClientService.sendPostRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE_ACCOUNT,accontDto).subscribe((data: any)=>{      
      this.showMessageFlag=1
    })
    
  }

}
