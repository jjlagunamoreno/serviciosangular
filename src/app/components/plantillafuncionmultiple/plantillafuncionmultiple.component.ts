import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { PlantillaFuncion } from '../../models/plantillafuncion';
@Component({
  selector: 'plantillafuncionmultiple.component',
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css'
})
export class PlantillaFuncionMultipleComponent implements OnInit {
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public empleados: Array<PlantillaFuncion>;
  public funciones!: Array<string>;
  public funcionesSeleccionadas: Array<string>;
  constructor(private _service: ServicePlantilla) {
    this.empleados = new Array<PlantillaFuncion>();
    this.funcionesSeleccionadas = new Array<string>();
  }
  mostrarPlantilla(): void {
    let aux = new Array<string>();
    for (var option of this.selectFunciones.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response => {
      this.empleados = response;
    })
  }
  ngOnInit(): void {
    this._service.getPlantilla().subscribe(response => {
      this.funciones = response;
    })
  }
}
