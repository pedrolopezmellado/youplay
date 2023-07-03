const { connection } = require('./conexionBD');

class DeporteService {
 
    async obtenerDeportes(res){
        var deportes = new Array();
        var query = "SELECT * from deportes;";
        connection.query(query, async function (err, result) {
            if (err) {
                res.status(500).send({mensaje:err});
                throw err;
            } else {
                res.status(200).send(result);
            }
        });
    }
}

module.exports = DeporteService;