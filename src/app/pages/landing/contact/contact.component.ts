import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 13.1281806, lng: 80.2386791 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 13.113791209645756, lng: 80.2436798829361 },
  ];

  constructor(private httpClient: HttpClient) {
    this.apiLoaded = this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBfvfdJ6DRNegMTgSrCxsA15n_j6Tf0UzE',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}
}
