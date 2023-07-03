const { connection } = require('./conexionBD');

class PistaService {


    async obtenerPistasCentro(idCentro, res){
        var query = "SELECT id, nombre, centro FROM pistas WHERE centro = '" + idCentro + "';";
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

    async obtenerPistasDisponibles(anyo, mes, dia, idPista, res){
        var query = "SELECT hora FROM disponibilidad WHERE dia = '" + dia + "' AND mes = '" + mes + "' AND anyo = '" + anyo + "' AND pista = '" + idPista + "';";
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
module.exports = PistaService;