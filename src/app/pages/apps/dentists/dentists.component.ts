import { Component, OnInit } from '@angular/core';

import { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData } from './data';

import { ChartType, OrdersTable } from './dentists.model';
import { DataApiService } from '../../../core/services/data-api.service';
import { UserInterface } from '../../../core/models/user-interface'; 
import { UserWService } from "../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})


export class DentistsComponent implements OnInit {
    public user:UserInterface;
    public users:UserInterface;
  breadCrumbItems: Array<{}>;
  constructor(  private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
        private route:ActivatedRoute,
    private router: Router) { }

  revenueAreaChart: ChartType;
  targetsBarChart: ChartType;
  salesDonutChart: ChartType;
  ordersData: OrdersTable[];
  getAllDentists(){
        this.dataApi.getAllDentistsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.users=res;            
        }
     });  
    }

  ngOnInit() {
         this.getAllDentists();
    this.breadCrumbItems = [{ label: 'Dentistas', active: true }];

    /**
     * Fetches the data
     */
    this._fetchData();
  }

  /**
   * fetches the dashboard value
   */
  private _fetchData() {
    this.revenueAreaChart = revenueAreaChart;
    this.targetsBarChart = targetsBarChart;
    this.salesDonutChart = salesDonutChart;
    this.ordersData = ordersData;
  }
}