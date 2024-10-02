import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
})
export class DashboardHomeComponent {
  public active = 1;
  selectedOption: any = "0";

  

  TotalProfit: any = {
    series: [70],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
      },
    },
    stroke: {
      lineCap: 'round'
    },
    colors: ['#4466f2'],
    labels: ["TOTAL PROFIT"],
  };
  
  
  
  
}
