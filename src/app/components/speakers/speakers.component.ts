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
  
  changeBg(bg: string){
    
    localStorage.setItem('bgColor', bg)
    window.location.reload()
  }
  
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }
}
