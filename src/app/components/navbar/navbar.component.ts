import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bg: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log(window.location.href)
    if (window.location.href =='http://localhost:4200/speakers' || window.location.href =='http://localhost:4200/about') {
      this.bg = 2;
    }
    if (window.location.href =='http://localhost:4200/accueil' || window.location.href =='http://localhost:4200/#' || window.location.href != null) {
      this.bg = 1;

    }

    if (window.location.href =='http://localhost:4200/reserver') {
      this.bg = 3;
    }
    console.log(this.bg);
    console.log(window.location.href);
    
    
    
    

  }

}
