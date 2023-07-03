// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Usuario_Torneo {
    constructor(idUsuario, idTorneo){
        this.idUsuario = idUsuario;
        this.idTorneo = idTorneo;
    }

    get getId(){
        return this.id;
    }

    get getIdTorneo(){
        return this.idTorneo;
    }

    get getIdUsuario(){
        return this.idUsuario;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setidTorneo(idTorneo){
        this.idTorneo = idTorneo;
    }

    set setIdUsuario(idUsuario){
        this.idUsuario = idUsuario;
    }

}
module.exports = Usuario_Torneo;