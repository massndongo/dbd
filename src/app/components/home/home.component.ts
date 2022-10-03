import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  user: User = new User()
  submitted = false

  bg: string;
  lang: string;

  private subscription: Subscription;
  
  public dateNow = new Date();
  public dDay = new Date('Dec 02 2022 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: number;
  public secondsToDday: number;
  public minutesToDday: number;
  public hoursToDday: number;
  public daysToDday: number;
  display1: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  display4: boolean = false;
  test: boolean = true;
  stop: boolean =true;

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

  
    
  constructor() {
    
  }

  ngOnInit(): void {
    console.log(this.test);
    
    this.lang = localStorage.getItem('lang') || 'en'

    this.bg = localStorage.getItem('bgColor') || '1'
    

    localStorage.setItem('bgColor', '1')

  

    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });





  }
  hide(){
    this.test = !this.test
    console.log(this.test);
    
  }
  fermer(){
    this.stop= false
  }
  updateCard1(){
    this.display1 = !this.display1
  }
  updateCard2(){
    this.display2 = !this.display2
  }
  updateCard3(){
    this.display3 = !this.display3
  }
  updateCard4(){
    this.display4 = !this.display4
  }
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }






  ngOnDestroy() {
    this.subscription.unsubscribe();
 }
  // title =  "google maps";
  // private map: google.maps.Map;
  

}

