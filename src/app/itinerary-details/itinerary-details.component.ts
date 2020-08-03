import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit{
  itineraryList: Array<any>;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.apiService.getCoordinates(params.get('itineraryID')).subscribe((data: any[])=>{
        let mapped = Object.keys(data).map(key => ({ponto: key, value: data[key]}));       
        mapped.splice(mapped.length-3, 3); 
        this.itineraryList = mapped;       
      }); 
    });  
  }
}