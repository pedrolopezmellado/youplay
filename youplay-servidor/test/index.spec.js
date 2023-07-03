var express = require('express');
const app = require('../app.js');
const request = require('supertest')

describe("HOME", ()=> {

    test("Entrada sin login -> responder 401", async () => {
        const response = await request(app).get("/youplay/home").send();
        expect(response.statusCode).toBe(401);
    });
})   

describe("USUARIOS", ()=> {

    test("/usuarios", async () => {
        const response = await request(app).get("/youplay/usuarios").send();
        expect(response.statusCode).toBe(200);
    });

    test("/usuarios/:id", async () => {
        const response = await request(app).get("/youplay/usuarios/29").send();
        expect(response.statusCode).toBe(200);
    });

    test("/usuarios/:idUsuario/restoEquipos/:deporte", async () => {
        const response = await request(app).get("/youplay/usuarios/29/restoEquipos/futbol").send();
        expect(response.statusCode).toBe(200);
    });

    test("/usuarios/:idUsuario/equipos/:deporte", async () => {
        const response = await request(app).get("/youplay/usuarios/29/equipos/futbol").send();
        expect(response.statusCode).toBe(200);
    });
    
})

describe("EQUIPOS", ()=> {

    test("/equipos", async () => {
        const response = await request(app).get("/youplay/equipos").send();
        expect(response.statusCode).toBe(200);
    });

    test("/equipos/:idEquipo", async () => {
        const response = await request(app).get("/youplay/equipos/1").send();
        console.log(response);
        expect(response.statusCode).toBe(200);
    });

    test("/equipos/deporte/:deporte", async () => {
        const response = await request(app).get("/youplay/equipos/deporte/futbol").send();
        expect(response.statusCode).toBe(200);
    });

    test("/equipos/obtenerIntegrantes/:idEquipo", async () => {
        const response = await request(app).get("/youplay/equipos/obtenerIntegrantes/1").send();
        console.log(response);
        expect(response.statusCode).toBe(200);
    });

    test("/equipos/crear", async () => {
        let json = {
            "deporte" : "futbol",
            "nombre" : "El Mejor",
            "integrantes" : []
        };
        const response = await request(app).post("/youplay/equipos/crear").send(json);
        expect(response.statusCode).toBe(200);
    });

    test("/equipos/:idEquipo/partidos", async () => {
        const response = await request(app).get("/youplay/equipos/1/partidos").send();
        expect(response.statusCode).toBe(200);
    });

    test("/equipos/:idEquipo/partidos/:deporte", async () => {
        const response = await request(app).get("/youplay/equipos/1/partidos/futbol").send();
        expect(response.statusCode).toBe(200);
    });
})

describe("PARTIDOS", ()=> {

    test("/partidos/:idPartido", async () => {
        const response = await request(app).get("/youplay/partidos/16").send();
        expect(response.statusCode).toBe(200);
    });

    test("/partidos/crear", async () => {
        json = {
            "fecha" : "2023-07-02",
            "usuario1" : null,
            "usuario2" : null,
            "equipo1" : 1,
            "equipo2" : 2,
            "pista" : 1,
            "deporte" : "futbol",
            "hora" : "13"
        };    
        const response = await request(app).post("/youplay/partidos/crear").send(json);
        expect(response.statusCode).toBe(200);
    });

    test("/partidos/enviarResultado", async () => {
        json = {
            "idPartido" : 22,
            "resultado" : "1-1"
        };    
        const response = await request(app).post("/youplay/partidos/enviarResultado").send(json);
        expect(response.statusCode).toBe(200);
    });

});

describe("MENSAJES", ()=> {

    test("/mensajes/:idEquipo", async () => {
        const response = await request(app).get("/youplay/mensajes/1").send();
        console.log(response);
        expect(response.statusCode).toBe(200);
    });

    test("/mensajes/crear", async () => {
        let json = {
            "texto" : "Hola, que tal estás?",
            "idUsuario" : 29,
            "idEquipo" : 1,
            "fecha" : new Date().toJSON().slice(0,10).replace(/-/g,'-')
        }    
        const response = await request(app).post("/youplay/mensajes/crear").send(json);
        expect(response.statusCode).toBe(200);
    });

});