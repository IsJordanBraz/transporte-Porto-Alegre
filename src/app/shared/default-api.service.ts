import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefaultApiService {

  constructor(private http: HttpClient) { }

  getBusList(): any {
    return this.http.get(environment.busUrl);
  }
  getLotList(): any {
    return this.http.get(environment.lotUrl);
  }
  getCoordinates(itineraryID): any {
    return this.http.get(environment.itineraryUrl + itineraryID);
  }
}
