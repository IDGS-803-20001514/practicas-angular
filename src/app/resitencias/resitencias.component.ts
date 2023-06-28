import { Component } from '@angular/core';

@Component({
  selector: 'app-resitencias',
  templateUrl: './resitencias.component.html',
  styleUrls: ['./resitencias.component.css']
})
export class ResitenciasComponent {

  colores = [
    { nombre: "Negro", hex: "#000000", valor: 0 },
    { nombre: "Marrón", hex: "#964B00", valor: 1 },
    { nombre: "Rojo", hex: "#FF0000", valor: 2 },
    { nombre: "Naranja", hex: "#FFA500", valor: 3 },
    { nombre: "Amarillo", hex: "#FFFF00", valor: 4 },
    { nombre: "Verde", hex: "#008000", valor: 5 },
    { nombre: "Azul", hex: "#0000FF", valor: 6 },
    { nombre: "Violeta", hex: "#EE82EE", valor: 7 },
    { nombre: "Gris", hex: "#808080", valor: 8 },
    { nombre: "Blanco", hex: "#FFFFFF", valor: 9 }
  ];

  primerColor: number = 0;
  segundoColor: number = 0;
  multiplicador:number = 0;
  valorNominal:number = 0;
  valorTole:number = 0;

  tolerancia:string = '';

  maximo !:string;
  minimo !:string;

  colorHexCampo1 !:string;
  colorHexCampo2 !:string;
  colorHexMulti !:string;
  colorHexTole !:string;

  calculo() {

    let valor1 = this.primerColor + this.segundoColor;

    let valor2 = this.multiplicador;

    this.valorNominal = valor1 * Math.pow(10, valor2);

    if (this.tolerancia === 'Oro') {
      this.valorTole = 0.05;

      this.colorHexTole = '#EABE3F';

    } else if (this.tolerancia === 'Plata') {
      this.valorTole = 0.1;

      this.colorHexTole = '#BEBEBE';
    }

    for (let index = 0; index < this.colores.length; index++) {

      const element = this.colores[index];

      if (element.valor == this.primerColor) {
        this.colorHexCampo1 = element.hex;
      }

      if (element.valor == this.segundoColor) {
        this.colorHexCampo2 = element.hex;
      }

      if (element.valor == this.multiplicador) {
        this.colorHexMulti = element.hex;
      }
    }

    this.maximo = (this.valorNominal * (1 + this.valorTole)).toString();
    this.minimo = (this.valorNominal * (1 - this.valorTole)).toString();
  }

}
