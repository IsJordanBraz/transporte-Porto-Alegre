import { Component, OnInit } from '@angular/core';

import { DefaultApiService } from './../../shared/default-api.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{
  busList: Array<any>;

  constructor(
    private apiService: DefaultApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getBusList().subscribe((data: any[]) => {
      this.busList = data;
    });
  }
}
