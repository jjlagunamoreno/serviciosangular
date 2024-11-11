import { PlantillaFuncion } from './../../models/plantillafuncion';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
    selector: 'app-plantilla-funcion-simple',
    templateUrl: './plantilla-funcion-simple.component.html',
    styleUrl: './plantilla-funcion-simple.component.css'
})
export class PlantillaFuncionSimpleComponent implements OnInit {

    @ViewChild('select') cajaSelect!: ElementRef;

    public plantillas!: Array<string>;
    public funciones!: Array<PlantillaFuncion>;

    constructor(private _service: ServicePlantilla) {
    }

    ngOnInit(): void {
        this._service.getPlantilla().subscribe(response => {
            this.plantillas = response;
        })
    }

    verFuncionPlantilla() {
        let funcion = this.cajaSelect.nativeElement.value;
        this._service.getFuncionPlantilla(funcion).subscribe(response => {
            this.funciones = response;
            console.log(this.funciones);
        })
    }
}
