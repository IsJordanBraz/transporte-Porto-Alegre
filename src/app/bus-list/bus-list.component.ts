import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{
  busList: Array<any>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getBusList().subscribe((data: any[])=>{
      this.busList = data;
    })  
  }
}