
<template>
    <header  id="myHeader">
        <v-app v-if="futbol" id="myHeader1">
            <div style="text-align: center; margin-top: 5%; margin-bottom:5%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <div style="margin-top:30px;">
                    <v-btn variant="outlined" v-on:click="crearEquipo">
                            Crear
                        </v-btn>
                </div>

            </div>
            <div style="margin-top:20px; margin-bottom:190px;">
                <v-container fluid grid-list-xl>
                <v-layout wrap justify-space-around>
                <v-flex v-for="partido in partidosLista" :key="partido.id">        
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="344"
                        width= "300"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                            PARTIDO
                            </div>
                            <div class="text-h6 mb-1">
                            {{partido.equipo1}} VS {{partido.equipo2}}
                            </div>
                        </div>
                        </v-card-item>

                        <v-card-actions>
                        <v-btn variant="outlined" color="blue" v-on:click="verEstadisticas(partido.id)">
                            Resumen
                        </v-btn>
                        <v-btn v-if="!partido.terminado" variant="outlined" color="red" v-on:click="eliminarPartido(partido.id)">
                            Borrar
                        </v-btn>
                        <v-btn v-if="partido.terminado" variant="outlined" >
                            Terminado
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
                
                </v-container>
            </div>
            <div style="text-align: center;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>


        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">
            <div style="text-align: center; margin-top: 5%; margin-bottom:5%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <div style="margin-top:30px;">
                    <v-btn variant="outlined" v-on:click="crearEquipo">
                            Crear
                        </v-btn>
                </div>

            </div>
            <div style="margin-top:20px; margin-bottom:190px;">
                <v-container fluid grid-list-xl>
                <v-layout wrap justify-space-around>
                <v-flex v-for="partido in partidosLista" :key="partido.id">        
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="344"
                        width= "300"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                            PARTIDO
                            </div>
                            <div class="text-h6 mb-1">
                            {{partido.equipo1}} VS {{partido.equipo2}}
                            </div>
                        </div>
                        </v-card-item>

                        <v-card-actions>
                        <v-btn variant="outlined" color="blue" v-on:click="verEstadisticas(partido.id)">
                            Resumen
                        </v-btn>
                        <v-btn v-if="!partido.terminado" variant="outlined" color="red" v-on:click="eliminarPartido(partido.id)">
                            Borrar
                        </v-btn>
                        <v-btn v-if="partido.terminado" variant="outlined" >
                            Terminado
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
                
                </v-container>
            </div>
            <div style="text-align: center;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>


        </v-app>
        <v-app v-if="padel" id="myHeader3">
            <div style="text-align: center; margin-top: 5%; margin-bottom:5%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <div style="margin-top:30px;">
                    <v-btn variant="outlined" v-on:click="crearEquipo">
                            Crear
                        </v-btn>
                </div>

            </div>
            <div style="margin-top:20px; margin-bottom:190px;">
                <v-container fluid grid-list-xl>
                <v-layout wrap justify-space-around>
                <v-flex v-for="partido in partidosLista" :key="partido.id">        
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="344"
                        width= "300"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                            PARTIDO
                            </div>
                            <div class="text-h6 mb-1">
                            {{partido.equipo1}} VS {{partido.equipo2}}
                            </div>
                        </div>
                        </v-card-item>

                        <v-card-actions>
                        <v-btn variant="outlined" color="blue" v-on:click="verEstadisticas(partido.id)">
                            Resumen
                        </v-btn>
                        <v-btn v-if="!partido.terminado" variant="outlined" color="red" v-on:click="eliminarPartido(partido.id)">
                            Borrar
                        </v-btn>
                        <v-btn v-if="partido.terminado" variant="outlined" >
                            Terminado
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
                
                </v-container>
            </div>
            <div style="text-align: center;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>


        </v-app>
        <v-app v-if="tenis" id="myHeader4">
            <div style="text-align: center; margin-top: 5%; margin-bottom:5%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <div style="margin-top:30px;">
                    <v-btn variant="outlined" v-on:click="crearEquipo">
                            Crear
                        </v-btn>
                </div>

            </div>
            <div style="margin-top:20px; margin-bottom:190px;">
                <v-container fluid grid-list-xl>
                <v-layout wrap justify-space-around>
                <v-flex v-for="partido in partidosLista" :key="partido.id">        
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="344"
                        width= "300"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div style="margin-bottom:20px;">
                            <div class="text-overline mb-1">
                            PARTIDO
                            </div>
                            <div class="text-h6 mb-1">
                            {{partido.usuario1}} VS {{partido.usuario2}}
                            </div>
                        </div>
                        </v-card-item>

                        <v-card-actions>
                        <v-btn variant="outlined" color="blue" v-on:click="verEstadisticas(partido.id)">
                            Resumen
                        </v-btn>
                        <v-btn v-if="!partido.terminado" variant="outlined" color="red" v-on:click="eliminarPartido(partido.id)">
                            Borrar
                        </v-btn>
                        <v-btn v-if="partido.terminado" variant="outlined" >
                            Terminado
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
                
                </v-container>
            </div>
            <div style="text-align: center;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>


        </v-app>
    </header>

</template>

<script>

import axios from 'axios';
import Vue from "vue";
import Autocomplete from 'vue2-autocomplete-js';

export default {
    components: {
        Autocomplete
    },
    name: "MisPartidos",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),  
        rules: {
            required: value => !!value || 'Field is required',
        }, 
        equipos: [],
        partidos: [], 
        partidosLista: [],
        repuesta:null,
        tab:null,
        futbol: false,
        baloncesto: false,
        padel:false,
        tenis:false, 
        deporteSelected:null,
        deportes:null,
        usuario1:null,
        usuarios: [],   
        usuarioFields:{value: 'nombre_completo'}     
    }),
    computed:{
        currentUser() {
            return this.$store.state.user;
        },
        currentSport() {
            return this.$store.state.deporte;
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('token');
            this.$store.commit('logout');
            this.$router.push('/');
            this.$router.go();
        },
        crearEquipo(){
            this.$router.push('/partidos/crear');
        },
        buscarEquipo(){
            this.$router.push('/equipos');
        },
        eliminarPartido(idPartido){
            console.log("EL ID DEL PARTIDO PARA BORRAR ES: " + idPartido);
            let urlEliminarPartido = "http://localhost:3000/youplay/partidos/" + idPartido;
            axios.delete(urlEliminarPartido).then(response => {
                console.log(response);
            });
            
        },
        editarEquipo(idEquipo){
            this.$router.push({ name: 'EditarEquipo', params: {idEquipo}});
        },
        verEstadisticas(idPartido){
            this.$router.push({ name: 'EstadisticasPartido', params: {idPartido}});
        },
        atras(){
            this.$router.push('/home');
        }
    },
    
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{
            console.log("el deporte es: " + this.currentSport);

            switch(this.currentSport){
                case "fútbol":
                    this.futbol = true;
                    break;
                case "baloncesto":
                    this.baloncesto = true;
                    break;
                case "pádel":
                    this.padel = true;
                    break;
                case "tenis":
                    this.tenis = true;
                    break;
            }

            // Si el deporte es tenis -> listamos los partidos del usuario
            
            if(this.tenis){
                
                let urlListarPartidos = "http://localhost:3000/youplay/usuarios/" + this.currentUser.id + "/partidos/";
                axios.get(urlListarPartidos).then(response => {
                    this.partidos = response.data;
                    axios.get(urlListarPartidos).then(response => {
                        this.partidos = response.data;
                        for(let j = 0; j< this.partidos.length; j++){
                            let urlObtenerUsuario = "http://localhost:3000/youplay/usuarios/" + this.partidos[j].usuario2;
                            axios.get(urlObtenerUsuario).then(response2 => {
                                let partido = {
                                    equipo1 : null,
                                    equipo2 : null,
                                    id : this.partidos[j].id,
                                    fecha : this.partidos[j].fecha,
                                    resultado : this.partidos[j].resultado,
                                    terminado: this.partidos[j].resultado != null,
                                    usuario1 : this.currentUser.nombreCompleto,
                                    usuario2 : response2.data[0].nombre_completo
                                }
                                this.partidosLista.push(partido);
                            });
                        }
                    }); 
                }); 

            } else {

                // Listamos todos los equipos del usuario

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
                let urlListarEquipos = "http://localhost:3000/youplay/usuarios/" + this.currentUser.id + "/equipos/" + this.currentSport;
                axios.get(urlListarEquipos).then(response => {

                    this.equipos = response.data;         
                    for(let i = 0; i< this.equipos.length; i++){

                        let urlListarPartidos = "http://localhost:3000/youplay/equipos/" + this.equipos[i].id + "/partidos/" + this.currentSport;
                        axios.get(urlListarPartidos).then(response => {

                            this.partidos = response.data;
                            let equipo1 = null;
                            let equipo2 = null;

                            for(let j = 0; j< this.partidos.length; j++){
                                
                                let utlObtenerEquipo1 = "http://localhost:3000/youplay/equipos/" + this.partidos[j].equipo1;
                                let utlObtenerEquipo2 = "http://localhost:3000/youplay/equipos/" + this.partidos[j].equipo2;
                
                                axios.get(utlObtenerEquipo1).then(response => {
                                    equipo1 = response.data[0].nombre;

                                    axios.get(utlObtenerEquipo2).then(response => {
                                        equipo2 = response.data[0].nombre;
                                        let partido = {
                                            equipo1 : equipo1,
                                            equipo2 : equipo2,
                                            id : this.partidos[j].id,
                                            fecha : this.partidos[j].fecha,
                                            resultado : this.partidos[j].resultado,
                                            terminado: this.partidos[j].resultado != null,
                                            usuario1 : null,
                                            usuario2 : null
                                        }

                                        this.partidosLista.push(partido);
                                    });
                                    
                                });
                                

                                
                            }
                        }) 
                    }
                }) 

            }

            

            

            

            
            
            
        }
    },
    handlePageChange(value) {
      this.pagina = value;
      this.next();
    },
  }
</script>



<style scoped>
@import url(https://cdn.syncfusion.com/ej2/material.css);
@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);
@import url(https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css);

    *{
        margin:0;
        padding:0;
        font-family: "Poppins", sans-serif;
    }

    body,
    input {
    
    }

    .flex {
        flex-grow: 0;
    }

    header{
        width: 100%;
        height: 850px;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
    }

    

    nav{
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 25px;
        justify-content: space-between;
        transition: all 0.5s ease;
    }

    .logo{
        font-size: 25px;
        color: white;
        font-weight: 100;
    }

    .deporte{
        font-size: 25px;
        color: white;
        font-weight: 100;
    }

    .menu{
        display: flex;
    }

    .menu li{
        list-style: none;
        margin: 10px;
    }

    .menu li a{
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.5s ease;
    }

    .menu li a:hover{
        padding: 5px 10px;
        background: #fff;
        color: #000;
        border-radius: 15px;
    }

    .scroll{
        height: 100px;
    }

    .nav.active{
        z-index: 1;
        background: white;
        padding: 15px;
    }

    .nav.active .logo,
    .nav.active .menu a{
        color: #000;
    }

    .nav.active a:hover{
        background: #000;
        color: #fff;
    }


    #myHeader1{
       width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/soccer-match3.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
    }

    #myHeader2{
       width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
    }

    #myHeader3{
       width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/padel-match.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
    }

    #myHeader4{
       width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/tenis-match.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
    }

    .wave{
        position:absolute;
        bottom: 0;
        width: 100%;
    }

    header .textos-header h1{
        display: flex;
        width: 100%;
        padding-left: 240px;
        padding-top: 250px;
    }

    header .textos-header h2{
        display: flex;
        width: 100%;
        padding-left: 240px;
        padding-top: 10px;
    }

    .textos-header{
        font-size: 30px;
        color: white;
    }


    .textos-header h2{
        font-size: 22px;
        color: white;
    }

    .relleno{
        height: 700px;
    }

</style>