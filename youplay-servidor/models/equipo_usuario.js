// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Equipo_Usuario {
    constructor(idEquipo, idUsuario){
        this.idEquipo = idEquipo;
        this.idUsuario = idUsuario;
    }

    get getId(){
        return this.id;
    }

    get getIdEquipo(){
        return this.idEquipo;
    }

    get getIdUsuario(){
        return this.idUsuario;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setidEquipo(equipo){
        this.equipo = equipo;
    }

    set setIdUsuario(idUsuario){
        this.idUsuario = idUsuario;
    }

}
module.exports = Equipo_Usuario;