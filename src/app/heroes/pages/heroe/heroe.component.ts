import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  heroe!: Heroe;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router) {}

  ngOnInit(): void {
    // const idHeroe: string = this.route.snapshot.params['id'];

    this.route.params.pipe( 
      switchMap(({id}) => {
        return this.heroesService.getHeroePorId(id)
      })
    ).subscribe(
      ( res: Heroe ) => { this.heroe = res }
    )
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}