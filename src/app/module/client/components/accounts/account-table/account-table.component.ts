import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../../http/http.service'
import { environment } from '../../../../../../environments/environment'
import { employee_URL} from '../../../../../config/constants'

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }

  public accounts:any;

  async ngOnInit(): Promise<void> {
    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+employee_URL.EMPLOYEE_ACCOUNT).subscribe((data: any)=>{
      this.accounts = data;
    })
  }
}
