import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnInit {

  @Input() indice: any;
  constructor() { }

  ngOnInit() {
  }

}
