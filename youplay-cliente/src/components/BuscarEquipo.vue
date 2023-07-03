
<template>
    <header id="myHeader">
        <v-app v-if="futbol" id="myHeader1">
            <div style="text-align: center; margin-top: 5%; margin-bottom:10px;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Todos los Equipos
                    </span>
            </div>
            <div style="margin: 15px auto; width: auto;">
                <v-card
                    class="pa-md-4 .mx-auto"
                    max-width="470"
                    width= "470"
                    variant="outlined">

                    <v-card-item>
                        <v-autocomplete
                            v-model="equipoBuscador"
                            :items="nombresEquipos"
                            label="Busca un equipo"
                        ></v-autocomplete>
                    </v-card-item>
                </v-card>
            </div>
            <div style="text-align: center; margin-top:20px; margin-bottom:100px;">
                <v-btn variant="outlined" v-on:click="atras()">
                        Atras
                </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                    Buscar Equipo
                </v-btn>
                <v-btn variant="outlined" v-on:click="borrarFiltro" style="margin-left:10px;">
                    Borrar Filtro
                </v-btn>
            </div>
            
        
            <v-container fluid grid-list-xl>
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equipos" :key="equipo.id">        
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
                    <v-flex  v-for="integrante in equipo.integrantes" :key="integrante.id">
                                <v-sheet >
                                    <v-sheet >
                                        <div >
                                            {{integrante.nombre_completo}}
                                        </div>
                                    </v-sheet>
                                    
                                </v-sheet>
                            </v-flex>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn  color="blue" variant="outlined" v-on:click="unirme(equipo.id)" v-if="equipo.disponible">
                        Unirme
                    </v-btn>
                    <v-btn v-if="!equipo.disponible" variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Equipo Completo
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>
            
            </v-container>
        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">
            <div style="text-align: center; margin-top: 5%; margin-bottom:10px;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Todos los Equipos
                    </span>
            </div>
            <div style="margin: 15px auto; width: auto;">
                <v-card
                    class="pa-md-4 .mx-auto"
                    max-width="470"
                    width= "470"
                    variant="outlined">

                    <v-card-item>
                        <v-autocomplete
                            v-model="equipoBuscador"
                            :items="nombresEquipos"
                            label="Busca un equipo"
                        ></v-autocomplete>
                    </v-card-item>
                </v-card>
            </div>
            <div style="text-align: center; margin-top:20px; margin-bottom:100px;">
                <v-btn variant="outlined" v-on:click="atras()">
                        Atras
                </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                    Buscar Equipo
                </v-btn>
                <v-btn variant="outlined" v-on:click="borrarFiltro" style="margin-left:10px;">
                    Borrar Filtro
                </v-btn>
            </div>
            
        
            <v-container fluid grid-list-xl>
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equipos" :key="equipo.id">        
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
                    <v-flex  v-for="integrante in equipo.integrantes" :key="integrante.id">
                                <v-sheet >
                                    <v-sheet >
                                        <div >
                                            {{integrante.nombre_completo}}
                                        </div>
                                    </v-sheet>
                                    
                                </v-sheet>
                            </v-flex>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn  color="blue" variant="outlined" v-on:click="unirme(equipo.id)" v-if="equipo.disponible">
                        Unirme
                    </v-btn>
                    <v-btn v-if="!equipo.disponible" variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Equipo Completo
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>
            
            </v-container>
        </v-app>
        <v-app v-if="padel" id="myHeader3">
            <div style="text-align: center; margin-top: 5%; margin-bottom:10px;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Todos los Equipos
                    </span>
            </div>
            <div style="margin: 15px auto; width: auto;">
                <v-card
                    class="pa-md-4 .mx-auto"
                    max-width="470"
                    width= "470"
                    variant="outlined">

                    <v-card-item>
                        <v-autocomplete
                            v-model="equipoBuscador"
                            :items="nombresEquipos"
                            label="Busca un equipo"
                        ></v-autocomplete>
                    </v-card-item>
                </v-card>
            </div>
            <div style="text-align: center; margin-top:20px; margin-bottom:100px;">
                <v-btn variant="outlined" v-on:click="atras()">
                        Atras
                </v-btn>
                <v-btn variant="outlined" v-on:click="buscarEquipo" style="margin-left:10px;">
                    Buscar Equipo
                </v-btn>
                <v-btn variant="outlined" v-on:click="borrarFiltro" style="margin-left:10px;">
                    Borrar Filtro
                </v-btn>
            </div>
            
        
            <v-container fluid grid-list-xl>
            <v-layout wrap justify-space-around>
            <v-flex v-for="equipo in equipos" :key="equipo.id">        
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
                    <v-flex  v-for="integrante in equipo.integrantes" :key="integrante.id">
                                <v-sheet >
                                    <v-sheet >
                                        <div >
                                            {{integrante.nombre_completo}}
                                        </div>
                                    </v-sheet>
                                    
                                </v-sheet>
                            </v-flex>
                    </v-card-item>

                    <v-card-actions>
                    <v-btn  color="blue" variant="outlined" v-on:click="unirme(equipo.id)" v-if="equipo.disponible">
                        Unirme
                    </v-btn>
                    <v-btn v-if="!equipo.disponible" variant="outlined" v-on:click="editarEquipo(equipo.id)">
                        Equipo Completo
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>
            
            </v-container>
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
    name: "BuscarEquipo",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),  
        rules: {
            required: value => !!value || 'Field is required',
        }, 
        nombresEquipos: [],
        equipoBuscador: null,
        todosEquipos: [],
        equipo: null,
        equipos: [],
        todosEquiposCompleto: [],
        futbol: false,
        baloncesto: false,
        padel:false, 
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
        atras(){
            let usuarioId = this.currentUser.id;
            this.$router.push({ name: 'MisEquipos', params: {usuarioId}});
        },
        unirme(idEquipo){
            let jugadores = [];
            jugadores.push(this.currentUser);
            let json = {
                "idEquipo" : idEquipo,
                "nombre" : null,
                "integrantes" : jugadores
            };
    
            axios.post('http://localhost:3000/youplay/equipos/editar', json)
            .then(response => {
                console.log(response.data);
                let usuarioId = this.currentUser.id;
                this.$router.push({ name: 'MisEquipos', params: {usuarioId}});
                
            }).catch(() => {
                this.mensajeLogin = "Login incorrecto";
                document.getElementById("pErrorLogin").style.display = "block";
                const self = this;
                self.animated = true;
                setTimeout(() => {
                    self.animated = false;
                }, 1000)
            });
        },
        buscarEquipo(){
            this.equipos = [];
            this.equipoBuscador;

            for(let i = 0; i < this.todosEquiposCompleto.length; i++){
                if(this.todosEquiposCompleto[i].nombre == this.equipoBuscador){
                    this.equipos.push(this.todosEquiposCompleto[i]);
                }
            }
        },
        borrarFiltro(){
            this.equipos = [];
            this.equipoBuscador = null;
            console.log("antes " + this.equipos.length)
            for(let i = 0; i < this.todosEquiposCompleto.length; i++){
                this.equipos.push(this.todosEquiposCompleto[i]);
            }
            console.log(this.todosEquiposCompleto.length);
       }
    },
    
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{
            console.log("------ el deporte es: " + this.currentSport);

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
            }
            //this.jugador1 = this.currentUser.nombreCompleto;

            /*
            localStorage.removeItem('token');
            this.$store.commit('logout');
            console.log(this.currentUser);
            this.$router.push('/');
            this.$router.go();
            */
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;

            let urlListarTodosEquipos = "http://localhost:3000/youplay/equipos/deporte/" + this.currentSport;
            axios.get(urlListarTodosEquipos).then(response => {
                console.log("****** LOS EQUIPOS OBTENIDOS: " + response.data.length);
                for(let i = 0; i< response.data.length; i++){
                    let urlListarIntegrantes = "http://localhost:3000/youplay/equipos/obtenerIntegrantes/" + response.data[i].id;
                    axios.get(urlListarIntegrantes).then(response2 => {
                        this.integrantes = response2.data;
                        let formoParte = false;
                        for(let j = 0; j< this.integrantes.length; j++){

                            if(this.integrantes[j].id == this.currentUser.id){
                                formoParte = true;
                            }
                        }
                        let equipo = {
                            id: response.data[i].id,
                            nombre: response.data[i].nombre,
                            integrantes: response2.data,
                            disponible: response2.data.length < 5
                        }

                       

                        if(!formoParte){
                            this.equipos.push(equipo);
                            this.todosEquiposCompleto.push(equipo);
                            this.nombresEquipos.push(equipo.nombre);
                            this.todosEquipos.push(equipo.nombre);

                        }
                    }) 
                    
                    
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
        position:fixed;
        width: 100%;
        height: 100vh;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/soccer-match3.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
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