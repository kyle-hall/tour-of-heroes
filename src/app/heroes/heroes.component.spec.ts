import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HeroService} from '../services/heroes/hero.service';
import {MessageService} from '../services/messages/message.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        HeroService,
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
