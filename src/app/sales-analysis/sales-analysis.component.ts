import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import moment from 'moment';

import { SalesDataService } from '../sales-data.service';

@Component({
  selector: 'app-sales-analysis',
  templateUrl: './sales-analysis.component.html',
  styleUrls: ['./sales-analysis.component.scss']
})

export class SalesAnalysisComponent implements OnInit {

  public products: string[] = this.salesDataService.getProductNames();
  public formatedSalesData: Product[] = this.salesDataService.getFormatedSalesData('DD-MMM-YYYY')
  public filteredTotalAmount: number = 0;
  public productSelect: string = 'allProducts';
  public isFiltered: boolean =false;
  public salesData: Product[] = this.formatedSalesData;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    private salesDataService: SalesDataService,
  ) { }

  ngOnInit(): void {
  }

  handleFilter() {
    // product
    if (this.productSelect === 'allProducts') {
      this.isFiltered =false;
      this.salesData = this.formatedSalesData;
    }else{
      this.isFiltered =true;
      const fieltedSalesData = this.formatedSalesData.filter((item)=>item.product === this.productSelect);
      this.salesData = fieltedSalesData
    }

    // date
    if (this.range.value.start !== null) {
      // console.log(this.range.value.start);
      this.isFiltered =true;
      this.salesData = this.salesData.filter((item)=> (
        parseInt(moment(item.order_date).format('YYYYMMDD'))  >=
        parseInt(moment(this.range.value.start).format('YYYYMMDD')) 
        )
      )
    }
    if (this.range.value.end !== null) {
      this.isFiltered =true;
      this.salesData = this.salesData.filter((item)=> (
        parseInt(moment(item.order_date).format('YYYYMMDD'))  <=
        parseInt(moment(this.range.value.end).format('YYYYMMDD')) 
        )
      )
    }
    this.filteredTotalAmount = 0;
    for (const key in this.salesData) {
      this.filteredTotalAmount += this.salesData[key].total_amount;
    }
    console.log(this.filteredTotalAmount);
    console.log(this.salesData);
  }
}

export interface Product {
  order_no: string,
  order_date: string,
  status: number,
  product: string,
  category: string,
  total_amount: number,
  total_qty: number
}

