import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultApiService {

  emitirEvento = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    console.log('service');
  }

  getBusList(): any {
    return this.http.get(environment.busUrl);
  }
  getLotList(): any {
    return this.http.get(environment.lotUrl);
  }
  getCoordinates(itineraryID: string): any {
    return this.http.get(environment.itineraryUrl + itineraryID);
  }
}
