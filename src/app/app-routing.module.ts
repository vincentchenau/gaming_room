import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import { GamingRoomComponent } from './gaming-room/gaming-room.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sales-analysis', component: SalesAnalysisComponent },
  { path: 'gaming-room', component: GamingRoomComponent },
  { path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
