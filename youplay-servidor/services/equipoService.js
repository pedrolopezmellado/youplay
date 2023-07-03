const { connection } = require('./conexionBD');


class EquipoService {
    async crear(equipo, integrantes, res){
        var query = "INSERT INTO equipos (`nombre`, `deporte`) VALUES ('" + 
        equipo.nombre + "', '" + equipo.deporte + "');";
        
        connection.query(query, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            } else {
                // insertamos los integrantes en otra tabla 
                console.log(result.insertId)
                for(var i = 0; i<integrantes.length; i++){
                    var query2 = "INSERT INTO equipo_usuario (`id_usuario`, `id_equipo`) VALUES ('" + 
                    integrantes[i].id + "', '" + result.insertId + "');";
                    connection.query(query2, async function (err, result) {
                        if (err) {
                            res.status(500).send({mensaje:err});
                            throw err;
                        }
                    });
                }
                res.status(200).send("Equipo creado correctamente");
            }
        });
        
    }

    async editar(idEquipo, nombre, integrantes, res){
        var query = "";
        console.log("el nombre esssss: " + nombre);
        if(nombre != null){
            query = "UPDATE equipos SET nombre = '" + nombre + "' WHERE id = '" +  idEquipo + "';";
            connection.query(query, async function (err, result) {
                if (err) {
                    res.status(500).send({mensaje:err});
                    throw err;
                } else {
                    res.status(200).send("Nombre del equipo modificado correctamente");
                }
            });
        } else if(integrantes != null){
            
            for(var i = 0; i<integrantes.length; i++){
                var query2 = "INSERT INTO equipo_usuario (`id_usuario`, `id_equipo`) VALUES ('" + 
                integrantes[i].id + "', '" + idEquipo + "');";
                connection.query(query2, async function (err, result) {
                    if (err) {
                        res.status(500).send({mensaje:err});
                        throw err;
                    }
                });
            }
            console.log("Se han añadido jugadores al equipo");
            res.status(200).send("Se han añadido jugadores al equipo");
        }
    }


    async obtenerEquiposDelUsuario(idUsuario, res){
        var query = "SELECT id, nombre, deporte FROM equipos WHERE id IN ( SELECT id_equipo FROM equipo_usuario WHERE id_usuario = '" + idUsuario + "');";
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

    async obtenerEquiposDelUsuarioDeporte(idUsuario, deporte, res){
        var query = "SELECT id, nombre, deporte FROM equipos WHERE id IN ( SELECT id_equipo FROM equipo_usuario WHERE id_usuario = '" + idUsuario + "') AND deporte = '" + deporte + "';";
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

    async obtenerEquiposAjenos(idUsuario, res){
        var query = "SELECT id, nombre, deporte FROM equipos WHERE id NOT IN ( SELECT id_equipo FROM equipo_usuario WHERE id_usuario = '" + idUsuario + "');";
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

    async obtenerEquiposAjenosDeporte(idUsuario, deporte, res){
        var query = "SELECT id, nombre, deporte FROM equipos WHERE id NOT IN ( SELECT id_equipo FROM equipo_usuario WHERE id_usuario = '" + idUsuario + "') AND deporte = '" + deporte + "';";
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

    async obtenerEquipo(idEquipo, res){
        var query = "SELECT id, nombre, deporte FROM equipos WHERE id = '" + idEquipo + "';";
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

    async obtenerTodosEquipos(res){
        var query = "SELECT id, nombre, deporte FROM equipos;";
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

    async obtenerTodosEquiposDeporte(deporte, res){
        console.log("DENTRO YA: " + deporte);
        var query = "SELECT id, nombre, deporte FROM equipos WHERE deporte = '" + deporte + "';";
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


    async obtenerIntegrantes(idEquipo, res){
        console.log("le id equipo es: " + idEquipo);
        var query = "SELECT id, nombre_completo FROM usuarios WHERE id IN ( SELECT id_usuario FROM equipo_usuario WHERE id_equipo = '" + idEquipo + "');";
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

   /* async obtenerIntegrantesDeporte(idEquipo, deporte, res){
        console.log("le id equipo es: " + idEquipo);
        var query = "SELECT id, nombre_completo FROM usuarios WHERE id IN ( SELECT id_usuario FROM equipo_usuario WHERE id_equipo = '" + idEquipo + "') AND ;";
        connection.query(query, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            } else {
                console.log(result);
                res.status(200).send(result);             
            }
        });         
    }*/

    async borrarIntegrante(idUsuario, res){
        var query = "DELETE FROM equipo_usuario WHERE id_usuario=" + idUsuario;
        connection.query(query, function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
            }
            res.status(200).send("Integrante eliminado correctamente");
        });       
    }

    async eliminarEquipo(idEquipo, res){
        console.log(idEquipo);
        var query = "DELETE FROM equipo_usuario WHERE id_equipo=" + idEquipo;
        connection.query(query, function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
            }
            var query2 = "DELETE FROM equipos WHERE id=" + idEquipo;
            connection.query(query2, function (err, result) {
                if (err) {
                    res.status(500).send({mensaje:err});
                }
                res.status(200).send("Equipo eliminado correctamente");
            }); 
        });
    }


}

module.exports = EquipoService;