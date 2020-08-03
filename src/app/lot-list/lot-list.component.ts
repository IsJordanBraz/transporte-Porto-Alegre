import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css']
})
export class LotListComponent implements OnInit{
  lotList: Array<any>;

  constructor(
    private apiService: ApiService,
  ) { }
  
  ngOnInit() {
    this.apiService.getLotList().subscribe((data: any[])=>{
      this.lotList = data;
    })  
  }
}