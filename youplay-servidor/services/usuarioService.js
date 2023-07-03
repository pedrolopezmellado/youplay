// Importación fichero de conexión con BD
const { connection } = require('./conexionBD');
const argon2 = require('argon2');
const jose = require('jose');

// Autenticacion Tokens
const { generaToken } = require('../authentication.js');

// Localstorage

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

// Encriptacion de contraseñas
//const { decrypt, transformarClaveAHash } = require('../crypto');
// Autenticacion Tokens
//const { generaToken } = require('../authentication.js');

function guardarAutenticacionCliente(usuario, token){
    var user = JSON.stringify(usuario);
    localStorage.setItem("user", user);
    // localStorage.setItem("idUsuario", usuario.getId);
    // localStorage.setItem("emailUsuario", usuario.getEmail);
    // localStorage.setItem("admin", usuario.isAdmin);
    localStorage.setItem("token", token); 
}


class UsuarioService {

    async registrar(usuario, res){
        var query1 = "SELECT * from usuarios WHERE email='" + usuario.getEmail + "';";
        
        var query2 = "INSERT INTO usuarios (`nombre`, `email`, `password`, `nombre_completo`) VALUES ('" + 
        usuario.getNombre + "', '" + usuario.getEmail + "', '" + usuario.getPassword + "', '" + usuario.nombreCompleto + "');";

        connection.query(query1, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            }else if(result.length){
                res.status(400).send({mensaje:"Ese usuario ya existe."});
            }else{
                connection.query(query2, async function(error, resultado){
                    if(error) {
                        res.status(500).send({mensaje:error});
                        throw error;
                    }
                    var token = await generaToken(usuario);
                    guardarAutenticacionCliente(usuario, token);
                    console.log(token);
                    res.status(200).send({
                        accessToken: token,
                        mensaje: "Usuario creado correctamente",
                    });
                    /*
                    var idInsertado = resultado.insertId;
                    usuario.setId = idInsertado;
                    var token = generaToken(usuario)
                    guardarAutenticacionCliente(usuario, token);
                    res.status(201).location('http://localhost:3000/biblioteca/usuarios/' + idInsertado).send({
                        accessToken: token,
                        id: usuario.getId,
                        nombre: usuario.getNombre,
                        email: usuario.getEmail,
                        dni: usuario.getDni,
                        fecha_nacimiento: usuario.getFecha_nacimiento,
                        direccion: usuario.getDireccion,
                        admin: usuario.isAdmin,
                        mensaje: "Usuario creado correctamente"
                    });
                    */
                });
            }
        });
    }


    
    async login(usuario, res){
        var query = "SELECT * FROM usuarios WHERE email='" + usuario.getEmail + "';";
        
        connection.query(query, async function (err, result, fields) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            }else if(result.length){

                
                console.log(result[0].password);
                console.log(usuario.getPassword);
                const ok = await argon2.verify(result[0].password, usuario.getPassword);
                if(ok){
                    console.log(result[0].id)
                    usuario.setId = result[0].id;
                    usuario.setEmail = result[0].email;
                    usuario.setNombre = result[0].nombre;
                    usuario.setNombreCompleto = result[0].nombre_completo;
                    var token = await generaToken(usuario);
                    guardarAutenticacionCliente(usuario, token);

                    res.status(200).send({
                        accessToken: token,
                        mensaje: "Usuario logeado correctamente",
                        usuario: usuario
                    });
                } else {
                    res.status(401).send({mensaje:"Login erróneo"});
                }

                /*
                var hash = transformarClaveAHash(result[0].password);
                var passwordDesencriptada = decrypt(hash);
                if(passwordDesencriptada == usuario.getPassword){
                    console.log("Login correcto");
                    usuario.setId = result[0].idusuario;
                    usuario.setNombre = result[0].nombre;
                    usuario.setEmail = result[0].email;
                    usuario.setDni = result[0].dni;
                    usuario.setFecha_nacimiento = result[0].fecha_nacimiento;
                    usuario.setDireccion = result[0].direccion;
                    usuario.isAdmin = result[0].admin;
                    var token = generaToken(usuario)
                    guardarAutenticacionCliente(usuario, token);
                    res.status(201).location('http://localhost:3000/biblioteca/usuarios/' + usuario.getId).send({
                        accessToken: token,
                        id: usuario.getId,
                        nombre: usuario.getNombre,
                        email: usuario.getEmail,
                        dni: usuario.getDni,
                        fecha_nacimiento: usuario.getFecha_nacimiento,
                        direccion: usuario.getDireccion,
                        admin: usuario.isAdmin,
                        mensaje: "Login correcto"});
                }else{
                    res.status(401).send({mensaje:"Login erróneo"});    
                }
                */
            }else{
                res.status(401).send({mensaje:"Login erróneo"});
            }
        });
    }

    async listarTodos(res){
        connection.query("SELECT id, email, nombre_completo FROM usuarios;"
        , function (err, result) {
            if (err) {
                res.status(500).send({error:err});
            }
            
            if(result.length == 0){
                res.status(500).send({error:err});
            } else{
                res.status(200).send(result);
            }
        });
    }

    async obtenerUsuario(idUsuario, res){
        var query = "SELECT id, email, nombre_completo FROM usuarios WHERE id = '" + idUsuario + "';";
        connection.query(query, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            } else {
                console.log(result);
                res.status(200).send(result);             
            }
        });        
    }

    /*
    existeUsuario(usuario){
        return new Promise(function(resolve, reject){
            var query = "SELECT * FROM usuario WHERE idusuario=" + usuario.getId;
            connection.query(query, function (err, result) {
                if(err){
                    reject(err);
                }else if (result.length) {
                    resolve(true);
                }else{
                    resolve(false);
                }
            });
        });
    }

    eliminarUsuario(idUsuario, res){
        var query = "DELETE FROM usuario WHERE idusuario=" + idUsuario;
        connection.query(query, function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
            }
            res.status(204).send({mensaje:"Usuario eliminado"});
        });
    }

    
    */

}

module.exports = UsuarioService;