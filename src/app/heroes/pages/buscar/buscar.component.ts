import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = '';
  heroes: Heroe[] = []; 

  constructor( private heroesService: HeroesService) { }

  buscar() {
    this.heroesService.getHeroes().subscribe(
      (res: Heroe[]) => this.heroes = res
    )
  }
}
