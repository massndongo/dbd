import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bg: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log(window.location.href)
    if (window.location.href =='http://localhost:4200/speakers') {
      this.bg = true
    }else {
      this.bg = false
    }
    

  }

}
