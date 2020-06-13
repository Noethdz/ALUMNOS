import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'alumnos' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

*/

///////////////////////