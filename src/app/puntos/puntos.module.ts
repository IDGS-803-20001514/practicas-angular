import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaPuntosComponent } from '../distancia-puntos/distancia-puntos.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DistanciaPuntosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    DistanciaPuntosComponent
  ]
})
export class PuntosModule { }
