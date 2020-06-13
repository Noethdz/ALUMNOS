import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlumnoModel } from '../models/alumno.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private url = 'https://alumnos-crud-1.firebaseio.com';


  constructor( private http: HttpClient ) { }


  crearAlumno( alumno: AlumnoModel ) {

    return this.http.post(`${ this.url }/alumnos.json`, alumno)
            .pipe(
              map( (resp: any) => {
                alumno.id = resp.name;
                return alumno;
              })
            );

  }

  actualizarAlumno( alumno: AlumnoModel ) {

    const alumnoTemp = {
      ...alumno
    };

    delete alumnoTemp.id;

    return this.http.put(`${ this.url }/alumnos/${ alumno.id }.json`, alumnoTemp);


  }

  borrarAlumno( id: string ) {

    return this.http.delete(`${ this.url }/alumnos/${ id }.json`);

  }


  getAlumno( id: string ) {

    return this.http.get(`${ this.url }/alumnos/${ id }.json`);

  }


  getAlumnos() {
    return this.http.get(`${ this.url }/alumnos.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( alumnosObj: object ) {

    const alumnos: AlumnoModel[] = [];

    Object.keys( alumnosObj ).forEach( key => {

      const alumno: AlumnoModel = alumnosObj[key];
      alumno.id = key;

      alumnos.push( alumno );
    });


    return alumnos;

  }


}
