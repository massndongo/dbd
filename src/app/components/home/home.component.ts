import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Loader } from '@googlemaps/js-api-loader';
import * as mapboxgl from 'mapbox-gl';
import { interval, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  
  public dateNow = new Date();
  public dDay = new Date('Dec 03 2022 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: number;
  public secondsToDday: number;
  public minutesToDday: number;
  public hoursToDday: number;
  public daysToDday: number;

  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
}

private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

  map: mapboxgl.Map
  style="mapbox://styles/mapbox/streets-v11"
  lat = 14.7645042
  lng = -17.3660286
  zoom = 9
  
    
  constructor() {
    
  }

  ngOnInit(): void {

    this.buildMap();

  

    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });





  }
  buildMap(){
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      attributionControl: false,
    });

    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true
    });

    this.map.addControl(navControl, 'top-right');
    this.map.addControl(new mapboxgl.FullscreenControl(), 'top-right')

        // Add markers to the map.

    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = 40;
    const height = 40;
    el.className = 'marker';
    el.style.backgroundImage = `url(https://imageholdr.com/336x250/transparent/a4052d/fa-bitcoin)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';




    // Add markers to the map.
    new mapboxgl.Marker(el)
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);

    
    


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }
  // title =  "google maps";
  // private map: google.maps.Map;
  

}

