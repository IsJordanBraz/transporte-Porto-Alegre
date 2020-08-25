import { Component, OnInit } from '@angular/core';

import { DefaultApiService } from './../../shared/default-api.service';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css']
})
export class LotListComponent implements OnInit{

  lotList: Array<any>;

  constructor( private defaultApi: DefaultApiService ) { }

  ngOnInit(): void {
    this.defaultApi.getLotList().subscribe(( data: any[]) => {
      this.lotList = data;
    });
  }
}
