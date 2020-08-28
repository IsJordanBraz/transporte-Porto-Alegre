import { Component, OnInit } from '@angular/core';

import { DefaultApiService } from '../../shared/service/default-api.service';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css']
})
export class LotListComponent implements OnInit{

  constructor(private defaultApiService: DefaultApiService) { }

  ngOnInit(): void {
    this.defaultApiService.getLotList().subscribe( data =>
      this.defaultApiService.emitirEvento.emit(data)
    );
  }
}
