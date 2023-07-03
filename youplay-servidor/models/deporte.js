// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Deporte {
    constructor(nombre){
        this.nombre = nombre;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getUsusario(){
        return this.usuario;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set setUsuario(usuario){
        this.usuario = usuario;
    }

}
module.exports = Deporte;