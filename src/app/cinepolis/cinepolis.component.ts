import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})

export class CinepolisComponent {

  nombre!: string;
  cantidadCompradores!: number;
  tarjetaCine!: string;
  cantidadBoletos!: number;

  precioBoleto: number = 12;

  total: number = 0

  default = "si";

  desision = ["si", "no"];

  calcularPrecio() {

    let boletoPermitodos = this.cantidadCompradores * 7;

    console.log(boletoPermitodos);

    if (this.cantidadBoletos > boletoPermitodos) {

      return alert("No se puede comprar más de 7 boletos");

    } else {

      if (this.default === 'si') {

        console.log('Entro a si');

        if (this.cantidadBoletos > 5) {

          this.total = this.cantidadBoletos * this.precioBoleto;

          let descuento = this.total * 0.15;

          this.total = this.total - descuento;

          let tarjetaCine = this.total * 0.10;

          this.total = this.total - tarjetaCine;

          return this.total;

        } else if (this.cantidadBoletos <= 5 && this.cantidadBoletos > 2) {

          this.total = this.cantidadBoletos * this.precioBoleto;

          let descuento = this.total * 0.10;

          this.total = this.total - descuento;

          let tarjetaCine = this.total * 0.10;

          this.total = this.total - tarjetaCine;

          return this.total;

        } else if (this.cantidadBoletos <= 2) {

          this.total = this.cantidadBoletos * this.precioBoleto;

          let tarjetaCine = this.total * 0.10;

          this.total = this.total - tarjetaCine;

          return this.total;
        }

      }

      if (this.default === 'no') {

        console.log('Entro a no');

        if (this.cantidadBoletos > 5) {

          console.log('Entro a no y a mas de 5');

          this.total = this.cantidadBoletos * this.precioBoleto;

          let descuento = this.total * 0.15;

          this.total = this.total - descuento;

          return this.total;

        } else if (this.cantidadBoletos <= 5 && this.cantidadBoletos > 2) {

          console.log('Entro a no y a menos de 5');

          this.total = this.cantidadBoletos * this.precioBoleto;

          let descuento = this.total * 0.10;

          this.total = this.total - descuento;

          return this.total;

        } else if (this.cantidadBoletos <= 2) {

          console.log('Entro a no y a 2');

          this.total = this.cantidadBoletos * this.precioBoleto;;

          return this.total;
        }

      }
    }

  }

}
