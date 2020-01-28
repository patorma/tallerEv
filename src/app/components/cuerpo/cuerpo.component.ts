import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  title = 'Hola a todos!';

  title2 = {
    nombre: 'Mauricio',
    apellido: 'Ibañez'
  };

  constructor() { }

  ngOnInit() {
  }

}
