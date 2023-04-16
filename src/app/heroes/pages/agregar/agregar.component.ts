import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  public publishers = [
    {id: 'DC Comics', desc: 'DC - comics'},
    { id: 'Marvel Comics', desc: 'Marvel - comics' }
  ]
}
