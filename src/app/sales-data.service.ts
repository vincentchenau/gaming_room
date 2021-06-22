import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import moment from 'moment';

import SampleData from '../assets/sample_data.json';


@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {
    // console.log('Reading local json files');
    // console.log(SampleData);
   }


  unique (arr: any[]) {
    let hash: any[] = [], result = [];
    for (let i = 0; i < arr.length; i++)
      if (!(arr[i] in hash)) {
        hash[arr[i]] = true;
        result.push(arr[i]);
      }
    return result;
  }

  getSalesData() {
    const salesData = [...SampleData];
    return salesData;
  }

  getFormatedData(dateFormat: string) {
    // dateFormat: 'DD-MMM-YY' 'DD-MMM-YYYY'
    const allOrderDates = SampleData.map(data=>data.order_date.slice(0,10));
    const formatedOrderData = allOrderDates.map((date)=> moment(date).format(dateFormat));
    return formatedOrderData;
  }

  getFormatedSalesData(dateFormat: string) {
    const salesData = [...SampleData];
    const formatedDate = this.getFormatedData(dateFormat);
    for (let index = 0; index < salesData.length; index++) {
      salesData[index].order_date = formatedDate[index];
    }
    return salesData;
  }

  getCategoryNames() {
    const allNames = SampleData.map(data=>data.category);
    const categoryNames = this.unique(allNames);
    return categoryNames.sort();
  }

  getTotalSalesPercentageOfCategory() {
    let totalSalesAmouontOfCategory: number[] = [];
    let totalSalesPercentageOfCategory: number[] = [];
    const salesData = [...SampleData];
    const allCategory = this.getCategoryNames();
    let totalAmount: number = 0;
    totalSalesAmouontOfCategory = new Array(allCategory.length).fill(0);
    for (const i in salesData) {
      for (const j in allCategory) {
        if (salesData[i].category === allCategory[j] ) {
          totalSalesAmouontOfCategory[j] += salesData[i].total_amount; 
        }
      }
    }
    for (const key in totalSalesAmouontOfCategory) {
      totalAmount += totalSalesAmouontOfCategory[key];
    }
    for (const key in totalSalesAmouontOfCategory) {
      totalSalesPercentageOfCategory[key] = totalSalesAmouontOfCategory[key]/totalAmount;
    }
    return totalSalesPercentageOfCategory;
  }

  getProductNames() {
    const allNames = SampleData.map(data=>data.product);
    const productNames = this.unique(allNames);
    return productNames.sort();
  }

  getOrderDates() {
    const allOrderDates = SampleData.map(data=>data.order_date.slice(0,10));
    const orderDates = this.unique(allOrderDates);
    return orderDates.sort();
  }

  getTotalAmountgOfAllDates() {
    let totalAmountgOfAllDates: number[] = [];
    const salesData = [...SampleData];
    const orderDates = this.getOrderDates();
    totalAmountgOfAllDates = new Array(orderDates.length).fill(0);
    for (const i in salesData) {
      for (const j in orderDates) {
        if (salesData[i].order_date.slice(0,10) === orderDates[j] ) {
          totalAmountgOfAllDates[j] += salesData[i].total_amount; 
        }
      }
    }
    return totalAmountgOfAllDates;
  }

  getSelectedProduct(productName: string) {
    const selectedProduct = SampleData.filter((item)=>item.product === productName);
    return selectedProduct;
  }

}


