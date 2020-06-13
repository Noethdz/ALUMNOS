import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





///////////////
/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
