// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Equipo_Torneo {
    constructor(idEquipo, idTorneo){
        this.idEquipo = idEquipo;
        this.idTorneo = idTorneo;
    }

    get getId(){
        return this.id;
    }

    get getIdEquipo(){
        return this.idEquipo;
    }

    get getIdTorneo(){
        return this.idTorneo;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setidEquipo(equipo){
        this.equipo = equipo;
    }

    set setIdTorneo(idTorneo){
        this.idTorneo = idTorneo;
    }

}
module.exports = Equipo_Torneo;