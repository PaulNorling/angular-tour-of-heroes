import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import {
  NgIf,
  NgFor,
  /* . . . */
} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero!: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
