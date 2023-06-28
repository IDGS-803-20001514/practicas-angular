import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResitenciasComponent } from '../resitencias/resitencias.component';


import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResitenciasComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  exports:[
    ResitenciasComponent
  ]
})
export class ModuloResitenciasModule { }
