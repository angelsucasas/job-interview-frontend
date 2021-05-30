import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../../http/http.service'
import { environment } from '../../../../../../environments/environment'
import { employee_URL} from '../../../../../config/constants'

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }
  
  public employees:any;
async ngOnInit(): Promise<void> {
  
    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE).subscribe((data: any)=>{
      this.employees = data;
    })
  }
}
