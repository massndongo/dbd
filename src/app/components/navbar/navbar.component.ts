import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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
