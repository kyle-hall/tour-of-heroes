import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

// <div><span>id: </span>{{ hero.id }}</div>
// <div><span>name: </span>{{ hero.name }}</div>
// <input [(ngModel)]="hero.name" placeholder="name">
