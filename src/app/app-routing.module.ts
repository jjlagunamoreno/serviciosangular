import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';

const routes: Routes = [
  {
    path: '', component: PersonasapiComponent
  },
  {
    path: 'comics', component: LibreriaComponent
  },
  {
    path: 'coches', component: CochesComponent
  },
  {
    path: 'plantilla', component: PlantillaFuncionSimpleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
