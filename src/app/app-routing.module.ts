import { LotListComponent } from './components/lot-list/lot-list.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onibus', component: BusListComponent },
  { path: 'lotacao', component: LotListComponent },
  // { path: 'onibus/:itineraryID', component: ItineraryDetailsComponent },
  // { path: 'lotação/:itineraryID', component: ItineraryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
