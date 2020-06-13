

export class AlumnoModel {

    id: string;
    nombre: string;
    apellidos: string;
    ncontrol: string;
    clavemat: string;
    calificacion: 'double';
    aprobado: boolean;

    constructor() {
        this.aprobado = true;
    }

}

