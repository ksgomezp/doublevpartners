import { Component, Input, OnChanges} from '@angular/core';
import { ChartType } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges{

public chartOptions: Partial<ChartOptions> | any;
cT: ChartType = "bar";

private _followers: any;
    
@Input() set followers(value: any) {

   this._followers = value;
   this.chartOptions.series[0].data = this._followers;
   this.ngOnChanges();

}

private _userLogins: any;
    
@Input() set userLogins(value: any) {

  this._userLogins = value;
  this.chartOptions.xaxis.categories = this._userLogins;
  this.ngOnChanges();
}
  
  constructor( ) { 
  }
  
  ngOnChanges(){
      
    this.chartOptions = {

      series : [
        {
          name: "Followers",
          data: this._followers
        }
      ],  
      chart : {
          height: 350,
          type: this.cT
      },
    
      xaxis : {
          categories: this._userLogins
      },
    
      title :  {text: "Followers"},
  
    }
  }
}
