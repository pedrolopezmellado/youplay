const { connection } = require('./conexionBD');

class MensajeService {

    async crear(mensaje, res){
        var query = "INSERT INTO mensajes (`texto`, `fecha`, `usuario`, `equipo`) VALUES ('" + 
         mensaje.texto + "', '" + mensaje.fecha + " 00:00:00', '" + mensaje.usuario + "', '" + mensaje.equipo + "');";
        
        connection.query(query, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            } else {
                res.status(200).send("Mensaje creado correctamente");
            }
        });
    }

    async obtenerMensajesDelEquipo(idEquipo, res){
        var query = "SELECT id, texto, fecha, usuario, equipo FROM mensajes WHERE equipo = '" + idEquipo + "';";
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
    
}

module.exports = MensajeService;