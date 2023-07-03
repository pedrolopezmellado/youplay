// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Torneo {
    constructor(nombre, creador, deporte, pista, centro){
        this.nombre = nombre;
        this.creador = creador;
        this.deporte = deporte;
        this.pista = pista;
        this.centro = centro;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getCreador(){
        return this.creador;
    }

    get getDeporte(){
        return this.deporte;
    }

    get getPista(){
        return this.pista;
    }

    get getCentro(){
        return this.centro;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set setCreador(creador){
        this.creador = creador;
    }

    set setDeporte(deporte){
        this.deporte = deporte;
    }

    set setPista(pista){
        this.pista = pista;
    }

    set setCentro(centro){
        this.centro = centro;
    }

}
module.exports = Torneo;