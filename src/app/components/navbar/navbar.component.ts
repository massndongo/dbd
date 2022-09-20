import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bg: any;
  lang: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.lang = localStorage.getItem('lang') || 'en'

    console.log(window.location.href)
    if (window.location.href =='http://localhost:4200/speakers' || window.location.href =='http://localhost:4200/about') {
      this.bg = 2;
    }
    if (window.location.href =='http://localhost:4200/accueil' || window.location.href =='http://localhost:4200/#' || window.location.href == 'http://localhost:4200/') {
      this.bg = 1;

    }

    if (window.location.href =='http://localhost:4200/reserver') {
      this.bg = 3;
    }
    console.log(this.bg);
    console.log(window.location.href);

  }

  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }

}
