import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { DistanciaPuntosComponent } from './distancia-puntos/distancia-puntos.component';
import { ResitenciasComponent } from './resitencias/resitencias.component';

const routes: Routes = [
  {path:'cinepolis', component:CinepolisComponent},
  {path:'distancia', component:DistanciaPuntosComponent},
  {path:'resistencias', component:ResitenciasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
