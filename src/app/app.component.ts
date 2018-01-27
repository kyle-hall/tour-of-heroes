import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
  `,
  styles: [`
    * {
      box-sizing: border-box;
    }
  `]
})
export class AppComponent {

  title = 'Tour of Heroes';

}
