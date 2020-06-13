import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { AlumnoModel } from '../../models/alumno.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: AlumnoModel[] = [];
  cargando = false;


  constructor( private alumnosService: AlumnosService ) { }

  ngOnInit() {

    this.cargando = true;
    this.alumnosService.getAlumnos()
      .subscribe( resp => {
        this.alumnos = resp;
        this.cargando = false;
      });

  }

  borrarAlumno( alumno: AlumnoModel, i: number ) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${alumno.nombre}`,
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.alumnos.splice(i, 1);
        this.alumnosService.borrarAlumno( alumno.id ).subscribe();
      }

    });



  }


}
