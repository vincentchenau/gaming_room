import { Component, OnInit, ViewChild } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { SalesDataService } from '../sales-data.service';
import moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Line chart
  public lineChartData: ChartDataSets[] = [
    { data: this.salesDataService.getTotalAmountgOfAllDates().map(item=> parseFloat(item.toFixed(2))), label: 'Revenue($)' },
  ];
  public lineChartLabels: Label[] = this.salesDataService.getOrderDates().map(item=>moment(item).format('DD-MMM-YY'));
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
  };
  public pieChartLabels: Label[] = this.salesDataService.getCategoryNames().map(item=>item+'(%)');
  public pieChartData: number[] = this.salesDataService.getTotalSalesPercentageOfCategory().map(item=> parseFloat((item*100).toFixed(2)));
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      // backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      backgroundColor:['#3B55E6', '#EB4E36', '#43D29E', '#32CBD8', '#E8C63B', '#3B55E6', '#EB4E36', '#43D29E', '#32CBD8', '#E8C63B', '#3B55E6', '#EB4E36', '#43D29E', '#32CBD8', '#E8C63B', ],
    },
  ];

  // Table
  public displayedColumns: string[] = [
    'order_no',
    'order_date',
    'status',
    'product',
    'category',
    'total_amount',
    'total_qty'];
  public formatedSalesData = new MatTableDataSource(this.salesDataService.getFormatedSalesData('DD-MMM-YYYY'));


  constructor( private salesDataService: SalesDataService ) { }

  ngOnInit(): void {
  }


  public salesData = this.salesDataService.getSalesData();
  public categoryNames = this.salesDataService.getCategoryNames();
  public productNames = this.salesDataService.getProductNames().sort();
  public orderDates = this.salesDataService.getOrderDates();

  //"order_date": "2020-01-21 00:00:00.000",('YYYY-MM-DD HH:mm:ss.SSS')//

  

}
