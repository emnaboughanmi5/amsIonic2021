import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'List of Providers', url: '/folder/List of Providers', icon: 'heart' },

  ];
  constructor() { }
}
