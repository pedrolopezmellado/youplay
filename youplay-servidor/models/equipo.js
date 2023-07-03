// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Equipo {
    constructor(nombre, deporte){
        this.nombre = nombre;
        this.deporte = deporte;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getDeporte(){
        return this.deporte;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set setDeporte(deporte){
        this.deporte = deporte;
    }

}
module.exports = Equipo;