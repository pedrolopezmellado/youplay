class Mensaje {

    constructor(texto, fecha, usuario, equipo){
        this.texto = texto;
        this.fecha = fecha;
        this.usuario = usuario;
        this.equipo = equipo;
    }

    get getId(){
        return this.id;
    }

    get getTexto(){
        return this.texto;
    }

    get getFecha(){
        return this.fecha;
    }

    get getUsuario(){
        return this.usuario;
    }

    get getEquipo(){
        return this.equipo;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setTexto(texto){
        this.texto = texto;
    }

    set setFecha(fecha){
        this.fecha = fecha;
    }

    set setUsuario(usuario){
        this.usuario = usuario;
    }

    set setEquipo(equipo){
        this.equipo = equipo;
    }

}

module.exports = Mensaje;