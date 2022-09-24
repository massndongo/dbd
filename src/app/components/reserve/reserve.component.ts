import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  lang: string;

  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
    localStorage.setItem('bgColor', '3')

  }
  
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }
}
