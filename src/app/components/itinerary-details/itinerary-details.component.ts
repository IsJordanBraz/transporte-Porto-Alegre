import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DefaultApiService } from './../../shared/default-api.service';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit{

  itineraryList: Array<any>;

  constructor(
    private defaultApi: DefaultApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.defaultApi.getCoordinates(params.get('itineraryID')).subscribe((data: any[]) => {
      });
    });
  }
}
