import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../../http/http.service'
import { FormControl, FormGroup } from '@angular/forms';
import {Employee} from '../../../../../model/employee/employee.model'
import { environment } from '../../../../../../environments/environment'
import { employee_URL} from '../../../../../config/constants'

@Component({
  selector: 'app-employee-register-form',
  templateUrl: './employee-register-form.component.html',
  styleUrls: ['./employee-register-form.component.css']
})
export class EmployeeRegisterFormComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }
  private employes:any;
  
  ngOnInit(): void{}

  employeeDataForm = new  FormGroup({
    firstName : new FormControl(''),
    secondName: new FormControl(''),
    firstLastname: new FormControl(''),
    secondLastName: new FormControl(''),
    position: new FormControl(''),
    deparment : new FormControl(''),
  })

  showMessageFlag = 0
  
  onSubmit(){
    let EmployeDto: Employee={
      "firstName": this.employeeDataForm.controls.firstName.value,
      "secondName": this.employeeDataForm.controls.secondName.value,
      "firstLastname": this.employeeDataForm.controls.secondName.value,
      "secondLastname": this.employeeDataForm.controls.secondLastName.value,
      "position": this.employeeDataForm.controls.position.value,
      "deparment": this.employeeDataForm.controls.deparment.value,      
    }
    this.httpClientService.sendPostRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE,EmployeDto).subscribe((data: any)=>{
      this.employes = data;
      this.showMessageFlag=1
    })    
  }
}
