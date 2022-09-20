import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bg: string;
  lang: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.lang = localStorage.getItem('lang') || 'en'

    this.bg = localStorage.getItem('bgColor') || '1'
    
    console.log(this.bg);

  }

  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }

  changeBg(bg: string){
    
    localStorage.setItem('bgColor', bg)
    window.location.reload()
  }

}
