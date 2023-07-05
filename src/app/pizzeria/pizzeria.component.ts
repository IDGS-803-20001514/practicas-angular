import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {

  pizerriaForm: FormGroup;

  pizza: any;

  arrPizzas: any[] = [];

  totalVentas: number = 0;

  constructor(private readonly fb: FormBuilder) {

    this.pizerriaForm = this.initForm();

  }

  //Se ejecuta cuando se generar una orden
  onSubmit(): void {

    if (this.arrPizzas.length === 0) {

      // Agregar la propiedad de ReadOnly al input de nombre
      const nombreElement = document.getElementById('nombre') as HTMLInputElement;
      nombreElement.readOnly = false;

      // Agregar la propiedad de ReadOnly al input de direccion
      const direccionElement = document.getElementById('direccion') as HTMLInputElement;
      direccionElement.readOnly = false;

      // Agregar la propiedad de ReadOnly al input de telefono
      const telefonoElement = document.getElementById('telefono') as HTMLInputElement;
      telefonoElement.readOnly = false;

      this.totalVentas = 0;
    }

    this.obtenerValoresFormulario();
  }

  //se ejecuta cuando se quiere saber el total de la orden
  generarOrden(): void {

    let total = 0;

    this.arrPizzas.forEach((element: any) => {
      total += element.subTotal;
    });

    Swal.fire({
      title: 'Procesar orden',
      text: `Deseas Procesar la orden? El total es de: $${total}`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.totalVentas = total;

        this.arrPizzas = [];

        this.limpiarCampos();
      }
    });

  }

  eliminar(posicion:number): void {

    this.arrPizzas.splice(posicion, 1);
  }

  obtenerValoresFormulario(): void {

    console.log(this.pizerriaForm);

    const nombre = this.pizerriaForm.get('nombre')?.value
    const direccion = this.pizerriaForm.get('direccion')?.value
    const telefono = this.pizerriaForm.get('telefono')?.value

    //Se obtiene el valor del radio button seleccionado
    const tamanioElement = document.querySelector('input[name="tamanio"]:checked') as HTMLInputElement;
    const tamanio = tamanioElement ? tamanioElement.value : '';

    //Se crea un arreglo de ingredientes seleccionados
    const ingredientesSeleccionados: string[] = [];

    //Se obtienen los ingredientes seleccionados
    const ingredientesCheckbox = document.querySelectorAll('input[name="ingredientes"]:checked');

    //Se recorre el arreglo de ingredientes seleccionados y se agrega al arreglo de ingredientesSeleccionados
    ingredientesCheckbox.forEach((element: Element) => {
      if (element instanceof HTMLInputElement) {
        ingredientesSeleccionados.push(element.value);
      }
    });

    const cantidad = this.pizerriaForm.get('cantidad')?.value

    if (nombre === '' || nombre === null || direccion === '' || direccion === null || telefono === '' || telefono === null || tamanio === '' || tamanio === '' || ingredientesSeleccionados.length === 0 || cantidad === '' || cantidad === 0 || cantidad === null || cantidad <= -1) {

      Swal.fire({
        title: 'Error',
        text: 'Verifica que no haya campos vacios y que la cantidad sea mayor a 0',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });

    }else{

      this.pizza = {
        nombre,
        direccion,
        telefono,
        tamanio,
        ingredientes: ingredientesSeleccionados,
        cantidad
      }

      let subTotal = 0;

      if(tamanio === 'Pequeña') {

        subTotal = (40 * cantidad) + ((ingredientesSeleccionados.length * cantidad) * 10);

      }else if(tamanio === 'Mediana') {

        subTotal = (80 * cantidad) + ((ingredientesSeleccionados.length * cantidad) * 10);

      }else if(tamanio === 'Grande') {

        subTotal = (120 * cantidad) + ((ingredientesSeleccionados.length * cantidad) * 10);
      }

      this.pizza.subTotal = subTotal;

      this.arrPizzas.push(this.pizza);

      if (this.arrPizzas.length >= 1) {

        // Agregar la propiedad de ReadOnly al input de nombre
        const nombreElement = document.getElementById('nombre') as HTMLInputElement;
        nombreElement.readOnly = true;

        // Agregar la propiedad de ReadOnly al input de direccion
        const direccionElement = document.getElementById('direccion') as HTMLInputElement;
        direccionElement.readOnly = true;

        // Agregar la propiedad de ReadOnly al input de telefono
        const telefonoElement = document.getElementById('telefono') as HTMLInputElement;
        telefonoElement.readOnly = true;

      }
    }
  }

  limpiarCampos(): void {

    this.pizerriaForm.reset();
  }

  initForm(): FormGroup {

    return this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      tamanio: ['', Validators.required],
      ingredientes: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }
}
