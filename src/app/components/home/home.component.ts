import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Loader } from '@googlemaps/js-api-loader';
import { interval, Subscription } from 'rxjs';


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

  
    
  constructor(
  ) { }

  ngOnInit(): void {

    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });

    // let portalDiv = document.getElementById('map') as HTMLElement;
    // console.log(portalDiv.innerHTML);
    
    // if (!portalDiv) {
    //     throw new Error("The element id wasn't found");
    // }

    // let laoder = new Loader({
    //   apiKey: "AIzaSyC0c_j5nQRK_YOEPkEhytO9xZ20RfEMaLw"
    // })
    // laoder.load().then(() => {
    //   console.log("test map");

    //   const location = {
    //     lat: 	14.7645042,
    //     lng: 	-17.3660286
    //   };

    //   this.map = new google.maps.Map(portalDiv, {
    //     center: location,
    //     zoom: 6
    //   })

    //   const maker = new google.maps.Marker({
    //     position: location,
    //     map: this.map
    //   })
      
    // })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }
  // title =  "google maps";
  // private map: google.maps.Map;
  

}

