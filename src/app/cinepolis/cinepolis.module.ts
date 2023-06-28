import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CinepolisComponent } from './cinepolis.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    CinepolisComponent,
  ]
})
export class CinepolisModule { }
