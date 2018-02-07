import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../symbols/hero';
import { HeroService } from '../services/heroes/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    console.log('Getting the hero on init');
    this.getHero();
    console.log('Done getting the hero on init');
  }

  getHero(): void {
    console.log('getting the hero inside the getHero method');
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('calling the hero service');
    this.heroService
      .getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
