import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulitoRoutingModule } from './modulito-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulitoRoutingModule
  ]
})
export class ModulitoModule { }

// Agregamos a mano el modulito y lo copiamos a app-routing.modules
// ng g m modulito --routing
