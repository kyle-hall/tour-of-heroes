import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  template: `
    <h2>{{ hero.name }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div><span>name: </span>{{ hero.name }}</div>
  `,
  styles: [
    `

    `
  ]
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
