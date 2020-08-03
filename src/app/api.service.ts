import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
 
constructor(
    private http: HttpClient,
  ) { }
  
  getBusList() {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o');
  }
  getLotList() {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l');
  }
  getCoordinates(itineraryID) {
    return this.http.get('http://www.poatransporte.com.br/php/facades/process.php?a=il&p='+itineraryID+'');
  }
}