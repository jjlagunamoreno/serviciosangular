import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from '@angular/forms';

import { provideHttpClient } from '@angular/common/http';

//Implementamos para el servicio
import { ServiceComics } from './services/service.comics';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibreriaComponent,
    ComicComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceComics, ServicePersonas, provideHttpClient()],//Y LO IMPLEMENTAMOS EN PROVIDERS
  bootstrap: [AppComponent]
})
export class AppModule { }
