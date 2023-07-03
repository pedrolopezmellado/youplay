
<template>
    <header  id="myHeader">
        <v-app v-if="futbol" id="myHeader1">
            <div class="navbar">
                        <div class="logo"><a href="#">YouPlay</a></div>
                        <div class="links">
                            <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                            <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                            <a v-on:click="cambiarDeporte('pádel')" class="movement">Pádel</a>
                            
                        </div>
                        <ul class="links">
                            <li>
                                <a v-on:click="misEquipos()" class="movement">Mis equipos</a>
                            </li>
                            <li>
                                <a v-on:click="misPartidos()" class="movement">Mis partidos</a>
                            </li>
                            <li>
                                <a v-on:click="" class="movement"></a>
                            </li>
                        </ul>
                    </div>





            <div style="text-align: center; margin-top: 10%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mis equipos
                
                </span>
            
                <div style="margin-top:30px;">

                <v-btn variant="outlined" v-on:click="crearEquipo" >
                        Crear
                    </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                        Buscar Equipo
                    </v-btn>    
                </div>
                
            </div>
            
            <v-container fluid grid-list-xl>

            <div style="margin-top:20px; margin-bottom:200px;">
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equiposFutbol" :key="equipo.id">        
                <v-card
                    class="pa-md-4 mx-lg-auto"
                    max-width="344"
                    width= "300"
                    variant="outlined"

                >
                    <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                        EQUIPO
                        </div>
                        <div class="text-h6 mb-1">
                        {{equipo.nombre}}
                        </div>
                    </div>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Info
                    </v-btn>
                    <v-btn variant="outlined" color="red" v-on:click="eliminarEquipo(equipo.id)">
                        Borrar
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>

            </div>
            
            
            
            </v-container>
            <div style="text-align: center;">
                        <v-btn variant="outlined" v-on:click="atras()" >
                        Atras
                </v-btn>
            </div>

        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">



            <div class="navbar">
                        <div class="logo"><a href="#">YouPlay</a></div>
                        <div class="links">
                            <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                            <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                            <a v-on:click="cambiarDeporte('pádel')" class="movement">Pádel</a>
                            
                        </div>
                        <ul class="links">
                            <li>
                                <a v-on:click="misEquipos()" class="movement">Mis equipos</a>
                            </li>
                            <li>
                                <a v-on:click="misPartidos()" class="movement">Mis partidos</a>
                            </li>
                            <li>
                                <a v-on:click="" class="movement"></a>
                            </li>
                        </ul>
                    </div>





            <div style="text-align: center; margin-top: 10%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mis equipos
                
                </span>
            
                <div style="margin-top:30px;">

                <v-btn variant="outlined" v-on:click="crearEquipo" >
                        Crear
                    </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                        Buscar Equipo
                    </v-btn>    
                </div>
                
            </div>
            
            <v-container fluid grid-list-xl>

            <div style="margin-top:20px; margin-bottom:200px;">
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equiposBaloncesto" :key="equipo.id">        
                <v-card
                    class="pa-md-4 mx-lg-auto"
                    max-width="344"
                    width= "300"
                    variant="outlined"

                >
                    <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                        EQUIPO
                        </div>
                        <div class="text-h6 mb-1">
                        {{equipo.nombre}}
                        </div>
                    </div>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Info
                    </v-btn>
                    <v-btn variant="outlined" color="red" v-on:click="eliminarEquipo(equipo.id)">
                        Borrar
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>

            </div>
            
            
            
            </v-container>
            <div style="text-align: center;">
                        <v-btn variant="outlined" v-on:click="atras()" >
                        Atras
                </v-btn>
            </div>

        </v-app>
        <v-app v-if="tenis" id="myHeader3">



            <div class="navbar">
                        <div class="logo"><a href="#">YouPlay</a></div>
                        <div class="links">
                            <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                            <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                            <a v-on:click="cambiarDeporte('pádel')" class="movement">Pádel</a>
                            
                        </div>
                        <ul class="links">
                            <li>
                                <a v-on:click="misPartidos()" class="movement">Mis partidos</a>
                            </li>
                            <li>
                                <a v-on:click="crearTorneo()" class="movement">Mis torneos</a>
                            </li>
                        </ul>
                    </div>





            <div style="text-align: center; margin-top: 10%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mis equipos
                
                </span>
            
                <div style="margin-top:30px;">

                <v-btn variant="outlined" v-on:click="crearEquipo" >
                        Crear
                    </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                        Buscar Equipo
                    </v-btn>    
                </div>
                
            </div>
            
            <v-container fluid grid-list-xl>

            <div style="margin-top:20px; margin-bottom:200px;">
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equiposFutbol" :key="equipo.id">        
                <v-card
                    class="pa-md-4 mx-lg-auto"
                    max-width="344"
                    width= "300"
                    variant="outlined"

                >
                    <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                        EQUIPO
                        </div>
                        <div class="text-h6 mb-1">
                        {{equipo.nombre}}
                        </div>
                    </div>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Info
                    </v-btn>
                    <v-btn variant="outlined" color="red" v-on:click="eliminarEquipo(equipo.id)">
                        Borrar
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>

            </div>
            
            
            
            </v-container>
            <div style="text-align: center;">
                        <v-btn variant="outlined" v-on:click="atras()" >
                        Atras
                </v-btn>
            </div>

        </v-app>
        <v-app v-if="padel" id="myHeader4">



            <div class="navbar">
                        <div class="logo"><a href="#">YouPlay</a></div>
                        <div class="links">
                            <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                            <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                            <a v-on:click="cambiarDeporte('pádel')" class="movement">Pádel</a>
                            
                        </div>
                        <ul class="links">
                            <li>
                                <a v-on:click="misEquipos()" class="movement">Mis equipos</a>
                            </li>
                            <li>
                                <a v-on:click="misPartidos()" class="movement">Mis partidos</a>
                            </li>
                            <li>
                                <a v-on:click="" class="movement"></a>
                            </li>
                        </ul>
                    </div>





            <div style="text-align: center; margin-top: 10%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mis equipos
                
                </span>
            
                <div style="margin-top:30px;">

                <v-btn variant="outlined" v-on:click="crearEquipo" >
                        Crear
                    </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                        Buscar Equipo
                    </v-btn>    
                </div>
                
            </div>
            
            <v-container fluid grid-list-xl>

            <div style="margin-top:20px; margin-bottom:200px;">
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equiposPadel" :key="equipo.id">        
                <v-card
                    class="pa-md-4 mx-lg-auto"
                    max-width="344"
                    width= "300"
                    variant="outlined"

                >
                    <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                        EQUIPO
                        </div>
                        <div class="text-h6 mb-1">
                        {{equipo.nombre}}
                        </div>
                    </div>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Info
                    </v-btn>
                    <v-btn variant="outlined" color="red" v-on:click="eliminarEquipo(equipo.id)">
                        Borrar
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>

            </div>
            
            
            
            </v-container>
            <div style="text-align: center;">
                        <v-btn variant="outlined" v-on:click="atras()" >
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
    name: "MisEquipos",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),  
        rules: {
            required: value => !!value || 'Field is required',
        }, 
        equipos: [],
        futbol: false,
        baloncesto: false,
        tenis:false,
        padel:false, 
        equiposFutbol:[],
        equiposBaloncesto: [],
        equiposPadel: [],
        repuesta:null,
        tab:null,
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
            //this.$store.commit('saveSport', this.currentSport); 
            this.$router.push('/equipos/crear');
        },
        buscarEquipo(){
            this.$router.push('/equipos');
        },
        eliminarEquipo(idEquipo){
            console.log("el id del equipo es: " + idEquipo);
            let urlEliminarEquipo = "http://localhost:3000/youplay/equipos/" + idEquipo;
            axios.delete(urlEliminarEquipo).then(response => {
                console.log(response);
            });
            location.reload(); 
        },
        misPartidos(){
            let usuarioId = this.currentUser.id;
            this.$router.push({ name: 'MisPartidos', params: {usuarioId}});
        },
        editarEquipo(idEquipo){
            this.$router.push({ name: 'EditarEquipo', params: {idEquipo}});
        },
        atras(){
            this.$router.push('/home');
        },
        cambiarDeporte(deporteSeleccionado){
           switch(deporteSeleccionado){
            case "fútbol":
                this.futbol = true;
                this.baloncesto = false;
                this.tenis = false;
                this.padel = false;
                break;
            case "baloncesto":
                this.futbol = false;
                this.baloncesto = true;
                this.tenis = false;
                this.padel = false;
                break;
            case "tenis":
                this.futbol = false;
                this.baloncesto = false;
                this.tenis = true;
                this.padel = false;
                break;
            case "pádel":
                this.futbol = false;
                this.baloncesto = false;
                this.tenis = false;
                this.padel = true;
                break;
           }
           this.deporteSeleccionado = deporteSeleccionado;
           this.$store.commit('saveSport', this.deporteSeleccionado);      


        }
    },
    
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{
            console.log("´+´+´+´+´+´+´+ el deporte es: " + this.currentSport)
            //this.jugador1 = this.currentUser.nombreCompleto;


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





            /*
            localStorage.removeItem('token');
            this.$store.commit('logout');
            console.log(this.currentUser);
            this.$router.push('/');
            this.$router.go();
            */
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;



            let urlListarEquipos = "http://localhost:3000/youplay/usuarios/" + this.currentUser.id + "/equipos";
            axios.get(urlListarEquipos).then(response => {
                this.equipos = response.data;

                for(let i = 0; i< this.equipos.length; i++){
                    switch(this.equipos[i].deporte){
                        case "fútbol":
                            this.equiposFutbol.push(this.equipos[i]);
                            break;
                        case "baloncesto":
                            this.equiposBaloncesto.push(this.equipos[i]);
                            break;
                        case "pádel":
                            this.equiposPadel.push(this.equipos[i]);
                            break;
                    }
                }
            }) 
            
            
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

    .flex {
        flex-grow: 0;
    }

   

    

    .navbar {
        position: fixed;
        width: 100%;
        height: 60px;
        display: flex;
        padding: 25px;
        align-items: center;
        justify-content: space-between;
    }

    li {
        list-style: none;
    }


    #myHeader1 a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.5s ease;
    }

    #myHeader1 a:hover {
        
        //padding: 5px 5px;
        //background: #fff;
        color: #000;
        //border-radius: 15px;
    }

    #myHeader2 a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.5s ease;
    }

    #myHeader2 a:hover {
        
        //padding: 5px 5px;
        //background: #fff;
        color: #000;
        //border-radius: 15px;
    }

    #myHeader3 a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.5s ease;
    }

    #myHeader3 a:hover {
        
        //padding: 5px 5px;
        //background: #fff;
        color: #000;
        //border-radius: 15px;
    }

    #myHeader4 a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.5s ease;
    }

    #myHeader4 a:hover {
        
        //padding: 5px 5px;
        //background: #fff;
        color: #000;
        //border-radius: 15px;
    }

    .logo{
        font-size: 25px;
        color: white;
        font-weight: 100;
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
        position: relative;
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
        position: relative;
    }

    #myHeader3{
       width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/tenis-match.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
    }

    #myHeader4{
       width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/padel-match.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
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

    .navbar .logo a{
        font-size: 1.5rem;
        font-weight: bold;
    }

    .navbar .links{
        display: flex;
        gap: 2rem;
        cursor: pointer;
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