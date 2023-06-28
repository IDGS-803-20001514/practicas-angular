import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-puntos',
  templateUrl: './distancia-puntos.component.html',
  styleUrls: ['./distancia-puntos.component.css']
})
export class DistanciaPuntosComponent {

  punto1!:number
  punto2!:number
  punto3!:number
  punto4!:number
  distancia:number = 0

  calcularDistancia(){

    this.distancia = Math.sqrt(Math.pow(this.punto2-this.punto1,2) + Math.pow(this.punto4-this.punto3,2))

  }

}
