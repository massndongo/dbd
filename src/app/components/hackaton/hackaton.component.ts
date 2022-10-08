import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackaton',
  templateUrl: './hackaton.component.html',
  styleUrls: ['./hackaton.component.scss']
})
export class HackatonComponent implements OnInit {
  lang: string;

  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
  }
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }
}
