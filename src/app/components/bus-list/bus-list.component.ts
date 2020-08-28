import { Component, OnInit } from '@angular/core';

import { DefaultApiService } from '../../shared/service/default-api.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{

  constructor(private defaultApiService: DefaultApiService) { }

  ngOnInit(): void {
    this.defaultApiService.getBusList().subscribe( data =>
      this.defaultApiService.emitirEvento.emit(data)
    );
  }
}
