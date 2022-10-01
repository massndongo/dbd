import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  lang: string;
  bg1: string;
  bg2: string;
  program1: boolean;
  program2: boolean;

  constructor() { }

  ngOnInit(): void {
    
    this.lang = localStorage.getItem('lang') || 'en'
    
    localStorage.setItem('bgColor', '2')
    this.changeBg("bg1");
    console.log(this.program1);
    
    
  }

  
  changeLang(lang: string){
    localStorage.setItem('lang', lang)
    window.location.reload()
  }

  
  changeBg(value:string){
    if (value==='bg1') {
      this.bg1 = "background-color: #008773; color: #FAC400;"
      this.bg2 = "background-color: transparent; color:#008773"
      this.program1 = true
      this.program2 = false
    }
    if (value==='bg2') {
      this.bg2 = "background-color: #008773; color: #FAC400;"
      this.bg1 = "background-color: transparent; color:#008773"
      this.program1 = false
      this.program2 = true
    }
  }

  hide(value: string){
    if (value=="program1") {
      this.program1 = true;
      this.program2 = false;
    }else {
      this.program1 = false;
      this.program2 = true;
    }
  }

}
