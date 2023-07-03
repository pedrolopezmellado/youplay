// Conexión con servicio
const EquipoService = require('../services/equipoService.js');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Partido {
    
    constructor(){}

    get getId(){
        return this.id;
    }

    get getFecha(){
        return this.fecha;
    }

    get getResultado(){
        return this.resultado;
    }

    get getDeporte(){
        return this.deporte;
    }

    get getUsuario1(){
        return this.usuario1;
    }

    get getUsuario2(){
        return this.usuario2;
    }

    get getEquipo1(){
        return this.equipo1;
    }

    get getEquipo2(){
        return this.equipo2;
    }

    get getPista(){
        return this.pista;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setFecha(fecha){
        this.fecha = fecha;
    }

    set setResultado(resultado){
        this.resultado = resultado;
    }

    set setDeporte(deporte){
        this.deporte = deporte;
    }

    set setUsuario1(usuario1){
        this.usuario1 = usuario1;
    }

    set setUsuario2(usuario2){
        this.usuario2 = usuario2;
    }

    set setEquipo1(equipo1){
        this.equipo1 = equipo1;
    }

    set setEquipo2(equipo2){
        this.equipo2 = equipo2;
    }

    set setPista(pista){
        this.pista = pista;
    }
}
module.exports = Partido;