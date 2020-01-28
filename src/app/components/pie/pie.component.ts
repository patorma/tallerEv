import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  envivo = ''; // variable bidireccional

  mostrar = false;

  // lista = [1, 'otto', {asdf: 'ottoa'}] <- lista de elementos diferente tipo
  lista = ['otto', 'mauricio', 'katherine'];

  constructor() { }

  ngOnInit() {
  }

  imprimirEnConsola() {
    console.log(this.envivo + ' <- del botón');
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }

}
