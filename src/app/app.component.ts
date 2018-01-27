import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-heroes></app-heroes>
  `,
  styles: [`
    body {
      margin: 2em;
    }

    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }

    h2, h3 {
      color: #444;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: lighter;
    }

    body, input[text], button {
      color: #888;
      font-family: Cambria, Georgia;
    }

    * {
      font-family: Arial, Helvetica, sans-serif;
    }
  `]
})
export class AppComponent {

  title = 'Tour of Heroes';

}
