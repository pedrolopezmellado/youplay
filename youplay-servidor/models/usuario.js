// Conexión con servicio
const UsuarioService = require('../services/usuarioService.js');
const argon2 = require('argon2');

// Conexión con fichero de encriptación
//const { encrypt, decrypt, concatenarPartesClave, transformarClaveAHash} = require('../crypto.js');

class Usuario {
    constructor(nombre, email, password, nombreCompleto){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.nombreCompleto = nombreCompleto;
    }
    
    async registrar(res){
        const hashedPassword = await argon2.hash(this.getPassword);
        this.setPassword = hashedPassword;
        
        var usuarioService = new UsuarioService();
        usuarioService.registrar(this, res);
    }

    
    login(res){
        if(this.getEmail == undefined || this.getPassword == undefined){
            res.status(400).send("Petición incorrecta");
        }else{
            var usuarioService = new UsuarioService();
            usuarioService.login(this, res);
        }
    }

    /*
    async existeUsuario(){
        var usuarioService = new UsuarioService();
        var resultado = await usuarioService.existeUsuario(this);
        return resultado;
    }

    eliminarUsuario(idUsuario, res){
        var usuarioService = new UsuarioService();
        usuarioService.eliminarUsuario(idUsuario, res);
    }

    listarTodos(res){
        var usuarioService = new UsuarioService();
        usuarioService.listarTodos(res);
    }
    */

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getEmail(){
        return this.email;
    }

    get getNombreCompleto(){
        return this.nombreCompleto;
    }

    get getPassword(){
        return this.password;
    }

    set setId(nuevoId){
        this.id = nuevoId;
    }

    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set setEmail(nuevoEmail){
        this.email = nuevoEmail;
    }

    set setPassword(nuevaPassword){
        this.password = nuevaPassword;
    }

    set setNombreCompleto(nombreCompleto){
        this.nombreCompleto = nombreCompleto;
    }

}
module.exports = Usuario;