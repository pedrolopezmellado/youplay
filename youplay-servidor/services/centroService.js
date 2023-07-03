const { connection } = require('./conexionBD');

class CentroService {


    async obtenerTodosCentros(res){
        var query = "SELECT id, nombre, ubicacion FROM centros;";
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

module.exports = CentroService;