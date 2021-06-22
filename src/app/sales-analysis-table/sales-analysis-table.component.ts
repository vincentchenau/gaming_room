import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { OnChanges, SimpleChange } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ChangeDetectorRef } from '@angular/core'
import { Input } from '@angular/core';

import { SalesDataService } from '../sales-data.service';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sales-analysis-table',
  templateUrl: './sales-analysis-table.component.html',
  styleUrls: ['./sales-analysis-table.component.scss']
})
export class SalesAnalysisTableComponent implements AfterViewInit{

  @Input()
  salesData!: any[];

  public displayedColumns: string[] = [
    'order_no',
    'order_date',
    'status',
    'product',
    'category',
    'total_amount',
    'total_qty'];
  public dataSource = new MatTableDataSource(this.salesData);

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  @ViewChild(MatSort) 
  sort: MatSort = new MatSort();

 

  constructor(
    public changeDetectorRef:ChangeDetectorRef,
  ) {  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // ngOnChanges(changes: SimpleChange) {
  //   this.dataSource = new MatTableDataSource(this.salesData);
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['salesData'].currentValue);
    this.dataSource = new MatTableDataSource(this.salesData);
  }
}
