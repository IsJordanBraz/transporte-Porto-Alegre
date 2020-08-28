import {Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { DefaultApiService } from './../../service/default-api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource<PeriodicElement>

  (ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: DefaultApiService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.service.emitirEvento.subscribe( data => this.dataSource.data = data);
  }

}

export interface PeriodicElement {
  nome: string;
  codigo: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];
