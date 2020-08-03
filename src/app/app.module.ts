import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { LotListComponent } from './lot-list/lot-list.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ApiService } from './api.service';
import { FilterTermPipe } from './filter-term.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'onibus', component: BusListComponent },      
      { path: 'lotação', component: LotListComponent },
      { path: 'onibus/:itineraryID', component: ItineraryDetailsComponent },
      { path: 'lotação/:itineraryID', component: ItineraryDetailsComponent },
    ]),
    BrowserAnimationsModule,
    DataTablesModule,
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    BusListComponent,
    LotListComponent,
    ItineraryDetailsComponent,
    FilterTermPipe,
    DataTableComponent,
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }