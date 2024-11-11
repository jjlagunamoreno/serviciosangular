import { Component } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  standalone: true,
  // imports: [NgFor, NgIf],
  providers: [ServicePersonas]
})
export class PersonasstandaloneComponent {
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas) { }
  ngOnInit(): void {
    // this._service.getPersonas().subscribe(response => {
    //   console.log("leyendo");
    //   this.personas = response;
    // })
    this._service.getPersonasPromesa().then(response => {
      this.personas = response;
    })
  }
}
