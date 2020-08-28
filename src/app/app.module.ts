import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultApiService } from './shared/service/default-api.service';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { LotListComponent } from './components//lot-list/lot-list.component';
import { DataTableModule } from './shared/modules/data-table/data-table.module';
import { HeaderModule } from './shared/modules/header/header.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    LotListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    DataTableModule
  ],
  providers: [DefaultApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
