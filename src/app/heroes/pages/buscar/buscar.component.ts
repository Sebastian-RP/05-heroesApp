import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  public searchInput = new FormControl('');
  public heroes: Heroe[] = [];
  public selectedHero?: Heroe;

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || ''; //si no existe le valr en searchInput, sera string vacio

    this.heroesService.getSuggestions(value).subscribe(
      heroes => this.heroes = heroes
    );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    
    const hero: Heroe = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;
  }
}
