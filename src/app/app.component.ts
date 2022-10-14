import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dbd';
  lang: any;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('fr')
    this.translateService.use(localStorage.getItem('lang') || 'en')

  }
  
}
