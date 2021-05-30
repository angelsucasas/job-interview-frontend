import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../../../http/http.service'
import { environment } from '../../../../../../environments/environment'
import { employee_URL, TRANSACTION_URL} from '../../../../../config/constants'

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {

  constructor(
    private httpClientService:HttpClientService
  ) { }

  public transactions:any;

  async ngOnInit(): Promise<void> {
    this.httpClientService.sendGetRequest(environment.BACKEND_URL+':'+environment.BACKEND_PORT+'/'+TRANSACTION_URL.TRANSACTION).subscribe((data: any)=>{
      this.transactions = data;
    })
  }
}
