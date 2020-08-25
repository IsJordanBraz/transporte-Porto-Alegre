
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DefaultApiService } from './shared/default-api.service';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { LotListComponent } from './components//lot-list/lot-list.component';
import { ItineraryDetailsComponent } from './components//itinerary-details/itinerary-details.component';
import { ProductListComponent } from './components//product-list/product-list.component';
import { DataTableComponent } from './components//data-table/data-table.component';

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
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    BusListComponent,
    LotListComponent,
    ItineraryDetailsComponent,
    DataTableComponent,
  ],
  providers: [ DefaultApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
