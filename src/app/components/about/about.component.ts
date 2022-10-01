import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  lang: string;

  constructor() { }

  ngOnInit(): void {
    
    this.lang = localStorage.getItem('lang') || 'en'
    
    localStorage.setItem('bgColor', '2')
    
  }

  
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    // window.location.reload()
  }

}
