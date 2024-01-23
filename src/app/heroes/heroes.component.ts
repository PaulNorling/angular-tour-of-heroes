import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
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
  ngOnInit(): void {
    this.getHeroes();
  }
  
  heroes: Hero[] = [];

  selectedHero!: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
