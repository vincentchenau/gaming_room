import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule} from "@angular/cdk/table";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material/core';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalesAnalysisTableComponent } from './sales-analysis-table/sales-analysis-table.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { GamingRoomComponent } from './gaming-room/gaming-room.component';
import { GamingRoomReadComponent } from './gaming-room-read/gaming-room-read.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesAnalysisComponent,
    SalesAnalysisTableComponent,
    HomeTableComponent,
    GamingRoomComponent,
    GamingRoomReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ChartsModule,
    MatSliderModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    NgbModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,

    ReactiveFormsModule, 
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
