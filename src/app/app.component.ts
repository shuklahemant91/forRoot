import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    App Component
    <app-home></app-home>
    <button routerLink="/lazy">Get Lazy</button>
    <div>
      <router-outlet></router-outlet>
    </div>  
  `,
})
export class AppComponent {
  constructor() {}
}
