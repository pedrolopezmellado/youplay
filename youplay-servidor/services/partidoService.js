const { connection } = require('./conexionBD');

class PartidoService {
    async crear(partido, hora, res){
        var query = "INSERT INTO partidos (`fecha`, `usuario1`, `usuario2`, `equipo1`, `equipo2`, `pista`, `deporte`) VALUES ('" + 
        partido.fecha;
        
        if(partido.usuario1 == null && partido.usuario2 == null ){
            query = query + " " + hora +":00', null, null, ";
        } else {
            query = query + " " + hora + ":00', '" + partido.usuario1 + "', '" + partido.usuario2 + "', ";
        }
        if(partido.equipo1 == null && partido.equipo2 == null ){
            query = query + "null, null, ";
        } else {
            query = query + "'" + partido.equipo1 + "', '" + partido.equipo2 + "', ";
        }
        query = query + "'" + partido.pista + "', '" + partido.deporte + "');";
        
        connection.query(query, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            } else {

                // incluir en tabla disponibilidad la pista con la fecha ocupada

                console.log("la fecha es: " + partido.fecha);
                const [anyo, mes, dia] = partido.fecha.split("-");
                var miHora = hora + ":00";
                console.log("el anyo es: " + anyo);

                var query2 = "INSERT INTO disponibilidad (`dia`, `mes`, `anyo`, `hora`, `pista`) VALUES ('" + 
                dia + "', '" + mes + "', '" + anyo + "', '" + miHora + "', '" + partido.pista + "');";

                connection.query(query2, async function (err, result2) {
                    if (err) {
                        res.status(500).send({mensaje:err});
                        throw err;
                    } else {
                        res.status(200).send("Partido creado correctamente");
                    }

                });
            }
        });
    }

    async obtenerPartido(idPartido, res){
        var query = "SELECT id, fecha, resultado, equipo1, equipo2, usuario1, usuario2, pista, deporte FROM partidos WHERE id = '" + idPartido + "';";
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

    async obtenerPartidosEquipo(idEquipo, res){
        var query = "SELECT id, fecha, resultado, equipo1, equipo2, pista, deporte FROM partidos WHERE equipo1 = '" + idEquipo + "' OR equipo2 = '" + idEquipo + "';";
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

    async obtenerPartidosEquipoDeporte(idEquipo, deporte, res){
        var query = "SELECT id, fecha, resultado, equipo1, equipo2, pista, deporte FROM partidos WHERE (equipo1 = '" + idEquipo + "' OR equipo2 = '" + idEquipo + "') AND deporte = '" + deporte + "';";
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

    async obtenerPartidosUsuario(idUsuario, res){
        var query = "SELECT id, fecha, resultado, equipo1, equipo2, usuario1, usuario2, pista, deporte FROM partidos WHERE usuario1 = '" + idUsuario + "' OR usuario2 = '" + idUsuario + "';";
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

    async borrarPartidoEquipo(idEquipo, res){
        var query = "DELETE FROM partidos WHERE equipo1 = '" + idEquipo + "' OR equipo2 = '" + idEquipo + "';";
        connection.query(query, function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
            }
            res.status(200).send("Partido eliminado correctamente");
        });       
    }

    async borrarPartidoUsuario(idUsuario, res){
        var query = "DELETE FROM partidos WHERE usuario1 = '" + idUsuario + "' OR usuario2 = '" + idUsuario + "';";
        connection.query(query, function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
            }
            res.status(200).send("Partido eliminado correctamente");
        });       
    }

    async borrarPartido(idPartido, res){
        var query = "DELETE FROM partidos WHERE id = '" + idPartido + "';";
        connection.query(query, function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
            }
            res.status(200).send("Partido eliminado correctamente");
        });       
    }

    async enviarResultado(idPartido, resultado, res){
            var query = "UPDATE partidos SET resultado = '" + resultado + "' WHERE id = '" +  idPartido + "';";
            connection.query(query, async function (err, result) {
                if (err) {
                    res.status(500).send({mensaje:err});
                    throw err;
                } else {
                    res.status(200).send("Resultado del partido añadido correctamente");
                }
            });
    }
}

module.exports = PartidoService;