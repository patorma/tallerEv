import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brazo',
  templateUrl: './brazo.component.html',
  styleUrls: ['./brazo.component.css']
})
export class BrazoComponent implements OnInit {

  @Input() mensaje = 'msg por defecto';

  constructor() { }

  ngOnInit() {
  }

}
