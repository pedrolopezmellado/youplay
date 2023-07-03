const { response } = require('express');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const jose = require('jose');

app.use(bodyParser.json());

// Conexión con Modelos
const Usuario = require('../models/usuario.js');
const { jwtDecrypt } = require('jose');

// Autenticacion Tokens
const { checkToken } = require('../authentication.js');
const Equipo = require('../models/equipo.js');
const Partido = require('../models/partido.js');
const Mensaje = require('../models/mensaje.js');

const EquipoService = require('../services/equipoService.js');
const PartidoService = require('../services/partidoService.js');
const DeporteService = require('../services/deporteService.js');
const UsuarioService = require('../services/usuarioService.js');
const CentroService = require('../services/centroService.js');
const PistaService = require('../services/pistaService.js');
const MensajeService = require('../services/mensajeService.js');

// Configuracion del Multer
/*
const upload = multer({
    dest: 'upload'
})
*/

app.get('/', function(req, res) {
    res.send('Bienvenid@ a YouPlay!');
});

app.post('/registro',function(req, res) {
    var nuevoUsuario = req.body;
    var usuario = new Usuario(nuevoUsuario.nombre, nuevoUsuario.email, nuevoUsuario.password, nuevoUsuario.nombreCompleto);
    usuario.registrar(res);
});

app.post('/login', function(req, res) {
    var login = req.body;
    var usuario = new Usuario();
    usuario.setEmail = login.email;
    usuario.setPassword = login.password;
    console.log(usuario);
    usuario.login(res);
});

app.get('/home', checkToken, function(req, res) {
    res.status(200).send("Entramos al home");
});

app.get('/usuarios', function(req, res) {
    var usuarioService = new UsuarioService();
    usuarioService.listarTodos(res);
});

app.get('/usuarios/:idUsuario', function(req, res) {
    var usuarioService = new UsuarioService();
    var idUsuario = req.params.idUsuario;
    usuarioService.obtenerUsuario(idUsuario, res);
});

app.post('/equipos/crear', function(req, res) {
    console.log("aqui entro");
    var equipo = new Equipo();
    equipo.setNombre = req.body.nombre;
    equipo.setDeporte = req.body.deporte;
    var integrantes = req.body.integrantes
    console.log("**** El equipo es: ****");
    console.log(equipo);
    console.log(req.body.integrantes);
    var equipoService = new EquipoService();
    equipoService.crear(equipo, integrantes, res);
});

app.post('/equipos/editar', function(req, res) {
    var nombre = req.body.nombre;
    var idEquipo = req.body.idEquipo;
    var integrantes = req.body.integrantes
    var equipoService = new EquipoService();
    equipoService.editar(idEquipo, nombre, integrantes, res);
});

app.get('/usuarios/:idUsuario/equipos', function(req, res) {
    var idUsuario = req.params.idUsuario;
    var equipoService = new EquipoService();
    equipoService.obtenerEquiposDelUsuario(idUsuario, res);
});

app.get('/usuarios/:idUsuario/equipos/:deporte', function(req, res) {
    var deporte = req.params.deporte;
    var idUsuario = req.params.idUsuario;
    var equipoService = new EquipoService();
    equipoService.obtenerEquiposDelUsuarioDeporte(idUsuario, deporte, res);
});

app.get('/usuarios/:idUsuario/restoEquipos', function(req, res) {
    var idUsuario = req.params.idUsuario;
    var equipoService = new EquipoService();
    equipoService.obtenerEquiposAjenos(idUsuario, res);
});

app.get('/usuarios/:idUsuario/restoEquipos/:deporte', function(req, res) {
    var deporte = req.params.deporte;
    var idUsuario = req.params.idUsuario;
    var equipoService = new EquipoService();
    equipoService.obtenerEquiposAjenosDeporte(idUsuario, deporte, res);
});

app.get('/equipos/:idEquipo', function(req, res) {
    var idEquipo = req.params.idEquipo;
    var equipoService = new EquipoService();
    equipoService.obtenerEquipo(idEquipo, res);
});

app.get('/equipos', function(req, res) {
    console.log("Locooooooo: ");
    var equipoService = new EquipoService();
    equipoService.obtenerTodosEquipos(res);
});

app.get('/equipos/deporte/:deporte', function(req, res) {
    var deporte = req.params.deporte;
    console.log("Entro en el que quierooooo y: " + deporte);
    var equipoService = new EquipoService();
    equipoService.obtenerTodosEquiposDeporte(deporte, res);
});


app.get('/equipos/obtenerIntegrantes/:idEquipo', function(req, res) {
    var idEquipo = req.params.idEquipo;
    var equipoService = new EquipoService();
    equipoService.obtenerIntegrantes(idEquipo, res);
}); 
/*
app.get('/equipos/:deporte/obtenerIntegrantes/:idEquipo', function(req, res) {
    var idEquipo = req.params.idEquipo;
    var deporte = req.params.deporte;
    var equipoService = new EquipoService();
    equipoService.obtenerIntegrantesDeporte(idEquipo, deporte, res);
});*/

app.delete('/equipos/:idEquipo', async function(req, res) {
    var idEquipo = req.params.idEquipo;
    var equipoService = new EquipoService();
    equipoService.eliminarEquipo(idEquipo, res);
});

app.delete('/equipos/borrarIntegrante/:idUsuario', async function(req, res) {
    var idUsuario = req.params.idUsuario;
    var equipoService = new EquipoService();
    equipoService.borrarIntegrante(idUsuario, res);
});

app.post('/partidos/crear', function(req, res) {
    console.log("aqui entro");
    var partido = new Partido();
    partido.setFecha = req.body.fecha;
    partido.setUsuario1 = req.body.usuario1;
    partido.setUsuario2 = req.body.usuario2;
    partido.setEquipo1 = req.body.equipo1;
    partido.setEquipo2 = req.body.equipo2;
    partido.setPista = req.body.pista;
    partido.setDeporte = req.body.deporte;
    var hora = req.body.hora;
    console.log("entro al servicio y partido: " + partido);

    var partidoService = new PartidoService();
    partidoService.crear(partido, hora, res);
});

app.get('/deportes', function(req, res) {
    var deporteService = new DeporteService();
    deporteService.obtenerDeportes(res)
});

app.get('/equipos/:idEquipo/partidos', function(req, res) {
    var idEquipo = req.params.idEquipo;
    var partidoService = new PartidoService();
    partidoService.obtenerPartidosEquipo(idEquipo, res);
});

app.get('/equipos/:idEquipo/partidos/:deporte', function(req, res) {
    var idEquipo = req.params.idEquipo;
    var deporte = req.params.deporte;
    var partidoService = new PartidoService();
    if(deporte == "tenis"){
        partidoService.obtenerPartidosUsuario(idEquipo, res);
    } else {
        partidoService.obtenerPartidosEquipoDeporte(idEquipo, deporte, res);
    }
});

app.get('/centros', function(req, res) {
    var centroService = new CentroService();
    centroService.obtenerTodosCentros(res);
});

app.get('/pistas/:idCentro', function(req, res) {
    var idCentro = req.params.idCentro;
    var pistaService = new PistaService();
    pistaService.obtenerPistasCentro(idCentro, res);
});

app.delete('/partidos/:idPartido', async function(req, res) {
    var idPartido = req.params.idPartido;
    var partidoService = new PartidoService();
    partidoService.borrarPartido(idPartido, res);
});

app.get('/partidos/:idPartido', function(req, res) {
    var idPartido = req.params.idPartido;
    var partidoService = new PartidoService();
    partidoService.obtenerPartido(idPartido, res);
});

app.post('/partidos/enviarResultado', function(req, res) {
    var idPartido = req.body.idPartido;
    var resultado = req.body.resultado;
    var partidoService = new PartidoService();
    partidoService.enviarResultado(idPartido, resultado, res);
});

app.get('/mensajes/:idEquipo', function(req, res) {
    var idEquipo = req.params.idEquipo;
    var mensajeService = new MensajeService();
    mensajeService.obtenerMensajesDelEquipo(idEquipo, res);
});

app.get('/usuarios/:idUsuario/partidos', function(req, res) {
    var idUsuario = req.params.idUsuario;
    var partidoService = new PartidoService();
    partidoService.obtenerPartidosUsuario(idUsuario, res);
});

app.post('/mensajes/crear', function(req, res) {
    var texto = req.body.texto;
    var fecha = req.body.fecha;
    var idUsuario = req.body.idUsuario;
    var idEquipo = req.body.idEquipo;
    var mensajeService = new MensajeService();
    var mensaje = new Mensaje(texto, fecha, idUsuario, idEquipo);
    mensajeService.crear(mensaje, res);
});

app.get('/pistas/:idPista/disponibilidad/:fecha', function(req, res) {
    var fecha = req.params.fecha;
    const [anyo, mes, dia] = fecha.split("-");
    var idPista = req.params.idPista;
    console.log("Entro en la disponibilidad de las pistas");
    console.log("fecha " + anyo);
    var pistaService = new PistaService();
    pistaService.obtenerPistasDisponibles(anyo, mes, dia, idPista, res);
});

/*
app.delete('/usuarios/:idUsuario', chequeaJWT, chequeaAdmin, async function(req, res) {
    var idUsuario = req.params.idUsuario;
    var usuario = new Usuario();
    usuario.setId = idUsuario;

    var existeUsuario = await usuario.existeUsuario();  
    if(existeUsuario){
        usuario.eliminarUsuario(idUsuario, res);
    }else{
        res.status(404).send("El usuario con ese identificador NO EXISTE.");
    }
});

app.get('/libros', chequeaJWT, function(req, res) {

    const {page, size} = req.query;
    
    const limit = size;
    const offset = page * limit;
    try{

    var libro = new Libro();
    libro.listarTodos(res, limit, offset);
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.get('/categorias/:idCategoria/libros', chequeaJWT, function(req, res) {
    var idCategoria = req.params.idCategoria;
    const {page, size} = req.query;
    
    const limit = size;
    const offset = page * limit;
    try{

    var libro = new Libro();
    libro.listarLibrosCategoria(idCategoria, res, limit, offset);
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.get('/libros/buscar', chequeaJWT, function(req, res) {
    var datos = req.body;
    var textoABuscar = datos.texto;

    const {page, size} = req.query;
    const limit = size;
    const offset = page * limit;

    try{
        var libro = new Libro();
        libro.buscar(res, limit, offset, textoABuscar);
    }catch(error){
        res.status(500).send({error:error});
    }
});
  
app.get('/libros/:idLibro', chequeaJWT, function(req, res) {
    var idLibro = req.params.idLibro;
    var libro = new Libro();
    libro.mostrarDetalles(idLibro, res);
});

app.delete('/libros/:idLibro', chequeaJWT, chequeaAdmin, async function(req, res) {
    var idLibro = req.params.idLibro;
    var libro = new Libro();
    libro.setId = idLibro;

    var existeLibro = await libro.existeLibro();  
    if(existeLibro){
        libro.eliminarLibro(idLibro, res);
    }else{
        res.status(404).send("El libro con ese identificador NO EXISTE.");
    }
});
  
app.get('/libros/:idLibro/comentarios', chequeaJWT, async function(req, res) {
    var libro = new Libro();
    libro.setId = req.params.idLibro;
    
    const {page, size} = req.query;
    
    const limit = size;
    const offset = page * limit;

    try{
        var existeLibro = await libro.existeLibro();  
        if(existeLibro){
            var comentario = new Comentario();
            comentario.listarComentariosLibro(libro.getId, res, limit, offset);
        }else{
            res.status(404).send("El libro con ese identificador NO EXISTE.");
        }
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.put('/libros/:idLibro/comentarios/:idComentario', chequeaJWT, async function(req, res) {
    var comentario = new Comentario(req.body.texto, req.params.idLibro, JSON.parse(localStorage.user).id); 
    comentario.setId = req.params.idComentario;

    try{
        var existeComentario = await comentario.existeComentario();
        if(!existeComentario){
            res.status(404).send("No existe ese comentario.");
        }else if(comentario.getTexto == undefined){
            res.status(400).send("Petición incorrecta");
        }else{
            comentario.modificarComentario(res);
        }
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.post('/libros/:idLibro/comentarios', chequeaJWT, async function(req, res) {
    var libro = new Libro();
    libro.setId = req.params.idLibro;
    var datos = req.body;
    var comentario = new Comentario(datos.texto, libro.getId, JSON.parse(localStorage.user).id);

    try{
        var existeLibro = await libro.existeLibro();
        if(!existeLibro || comentario.getTexto == undefined){
            res.status(400).send("Petición incorrecta");
        }else{
            comentario.crearComentario(res);
        }
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.post('/prestamos', chequeaJWT, async function(req, res) {
    var datos = req.body;
    var prestamo = new Prestamo(datos.fecha_inicio, datos.fecha_fin, datos.idLibro, JSON.parse(localStorage.user).id);
    var libro = new Libro();
    libro.setId = datos.idLibro;
    
    try{
        var existeLibro = await libro.existeLibro();
        if(!existeLibro || prestamo.getFecha_inicio == undefined || prestamo.getFecha_fin == undefined || 
        prestamo.getIdLibro == undefined || prestamo.getIdUsuario == undefined){
            res.status(400).send("Petición incorrecta");
        }else{
            prestamo.crearPrestamo(res);
        }
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.get('/categorias', chequeaJWT, function(req, res) {
    try{
        var categoria = new Categoria();
        categoria.listarTodas(res);
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.get('/usuarios', chequeaJWT, chequeaAdmin, function(req, res) {
    try{
        var usuario = new Usuario();
        usuario.listarTodos(res);
    }catch(error){
        res.status(500).send({error:error});
    }
});

app.post('/upload',upload.single('upload') ,async(req,res) =>{
    res.status(201).send()
},(err,req,res,next) => res.status(404).send({error:err.message}))

*/

module.exports = app;

