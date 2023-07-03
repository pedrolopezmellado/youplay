// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Pista {
    constructor(nombre, centro){
        this.nombre = nombre;
        this.ocupada = false;
        this.centro = centro;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getOcupada(){
        return this.ocupada;
    }

    get getCentro(){
        return this.centro;
    }

    get getTorneo(){
        return this.torneo;
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

    set setOcupada(ocupada){
        this.ocupada = ocupada;
    }

    set setCentro(centro){
        this.centro = centro;
    }

    set setTorneo(torneo){
        this.torneo = torneo;
    }

}
module.exports = Pista;