import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  envivo = ''; // variable bidireccional

  constructor() { }

  ngOnInit() {
  }

  imprimirEnConsola() {
    console.log(this.envivo + ' <- del botón');
  }

}
