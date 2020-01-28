import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brazo',
  templateUrl: './brazo.component.html',
  styleUrls: ['./brazo.component.css']
})
export class BrazoComponent implements OnInit {

  @Input() mensaje = 'msg por defecto';
  @Output() enviar = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('brazo fue instanciado');
  }

  enviarMensaje() {
    this.enviar.emit('hola cuerpo');
  }

}
