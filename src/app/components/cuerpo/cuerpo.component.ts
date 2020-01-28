import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  title = 'Hola a todos!';

  title2: Persona = {
    nombre: 'Mauricio',
    apellido: 'Ibañez',
    seleccionado: true
  };

  saludo = 'Hola Mauricio';

  constructor() { }

  ngOnInit() {
  }

}
