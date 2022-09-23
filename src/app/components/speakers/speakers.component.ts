import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  lang: string;

  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'

    
    localStorage.setItem('bgColor', '2')
    
  }
  
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }
}
