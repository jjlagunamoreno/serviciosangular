import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  standalone: true,
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.component.html',
  styleUrls: ['./personasstandalone.component.css'],
  imports: [CommonModule]
})
export class PersonasstandaloneComponent implements OnInit {
  public personas: Array<any> = [];
  public errorMessage: string = '';

  constructor(private _servicePersonas: ServicePersonas) { }

  ngOnInit(): void {
    this._servicePersonas.getPersonasPromesa()
      .then((data) => {
        this.personas = data;
      })
      .catch((error) => {
        this.errorMessage = 'Hubo un error al cargar las personas.';
        console.error(error);
      });
  }
}
