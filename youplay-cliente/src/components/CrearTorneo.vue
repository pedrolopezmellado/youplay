
<template>
  <v-app id="inspire">
    <div v-if="card1" style="margin:10% 25%; width: 250px;">
        <v-card
            class="pa-md-4 mx-lg-auto"
            max-width="800"
            width= "800"
            variant="outlined"

        >
            <v-card-item>
               <div style="display: inline-block; margin-bottom:15px;"> 
                
                EQUIPOS
                </div>
            </v-card-item>

            <v-card-actions style="margin-bottom:10px;">
                <v-autocomplete
                v-model="equipo1"
                :items="todosEquipos"
                label='Equipo 1'
                ></v-autocomplete>
                
                <v-spacer></v-spacer>
                <v-autocomplete
                    v-model="equipo2"
                    :items="todosEquipos"
                    label="Equipo 2"
                ></v-autocomplete>
                
            </v-card-actions>
            <v-card-actions style="margin-bottom:10px;">
                <v-autocomplete
                v-model="equipo3"
                :items="todosEquipos"
                label='Equipo 3'
                ></v-autocomplete>
                
                <v-spacer></v-spacer>
                <v-autocomplete
                    v-model="equipo4"
                    :items="todosEquipos"
                    label="Equipo 4"
                ></v-autocomplete>
            </v-card-actions>
            <v-card-actions style="margin-bottom:10px;">
                <v-autocomplete
                v-model="equipo5"
                :items="todosEquipos"
                label="Equipo 5"
                ></v-autocomplete>

                <v-spacer></v-spacer>
                <v-autocomplete
                    v-model="equipo6"
                    :items="todosEquipos"
                    label="Equipo 6"
                ></v-autocomplete>
            </v-card-actions>
            <v-card-actions style="margin-bottom:10px;">
                <v-autocomplete
                v-model="equipo7"
                :items="todosEquipos"
                label="Equipo 7"
                ></v-autocomplete>

                <v-spacer></v-spacer>
                <v-autocomplete
                    v-model="equipo8"
                    :items="todosEquipos"
                    label="Equipo 8"
                ></v-autocomplete>
            </v-card-actions>
            <div class = "arrowRight" style="text-align:right;">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" color="#49A9F5" size="2xl"v-on:click="changeCard2" />

            </div>
        </v-card>

        

        
    </div>
    <div v-if="card2" style="margin:10% 25%; width: 250px;">
        <v-card
            class="pa-md-4 mx-lg-auto"
            max-width="800"
            width= "800"
            variant="outlined"

        >
            <v-card-item>
               <div > 
                Selecciona la fecha del encuentro

                <v-row justify="center">
                    <v-date-picker
                    v-model="fecha"
                    full-width
                    class="mt-4"
                    no-title
                    color="blue"
                    min="2016-06-15"
                    max="2100-03-20"
                    ></v-date-picker>
                </v-row>
                </div>
            </v-card-item>

            <v-card-actions>
                <font-awesome-icon :icon="['fas', 'arrow-left']" size="2xl" style="cursor: pointer;" color="#49A9F5" v-on:click="changeCard1"/>
                <v-spacer></v-spacer>

                <font-awesome-icon  :icon="['fas', 'arrow-right']" size="2xl" style="cursor: pointer;"  color="#49A9F5" v-on:click="changeCard3" />                
            </v-card-actions>
            
            
            
        </v-card>

        

        
    </div>

    <div v-if="card3" style="margin:10% 25%; width: 250px;">
        <v-card
            class="pa-md-4 mx-lg-auto"
            max-width="800"
            width= "800"
            variant="outlined"

        >
            <v-card-item>
               <div > 
                Selecciona el centro


                <v-container fluid grid-list-xl>
                <v-layout wrap justify-space-around>
                <v-flex v-for="centro in centros" :key="centro.id">        
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="344"
                        width= "300"
                        variant="outlined"
                        v-on:click="seleccionarCentro(centro)"
                    >
                        <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                            CENTRO
                            </div>
                            <div class="text-h6 mb-1">
                            {{centro.nombre}}
                            </div>
                        </div>
                        </v-card-item>

                        <v-card-actions>
                        
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
                </v-container>



                
                </div>
            </v-card-item>

            <v-card-actions>
                <font-awesome-icon :icon="['fas', 'arrow-left']" size="2xl" style="cursor: pointer;" color="#49A9F5" v-on:click="changeCard2"/>
                <v-spacer></v-spacer>

                <font-awesome-icon  :icon="['fas', 'arrow-right']" size="2xl" style="cursor: pointer;" color="#49A9F5" v-on:click="changeCard4" />                
            </v-card-actions>
        </v-card>

        

        
    </div>

    <div v-if="card4" style="margin:10% 25%; width: 250px;">
        <v-card
            class="pa-md-4 mx-lg-auto"
            max-width="800"
            width= "800"
            variant="outlined"

        >
            <v-card-item>
               <div > 
                Selecciona la pista


                <v-container fluid grid-list-xl>
                <v-layout wrap justify-space-around>
                <v-flex v-for="pista in pistas" :key="pista.id">        
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="344"
                        width= "300"
                        variant="outlined"
                        v-on:click="seleccionarPista(pista)"
                    >
                        <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                            PISTA
                            </div>
                            <div class="text-h6 mb-1">
                            {{pista.nombre}}
                            </div>
                        </div>
                        </v-card-item>

                        <v-card-actions>
                        
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
                </v-container>



                
                </div>
            </v-card-item>

            <v-card-actions>
                <font-awesome-icon :icon="['fas', 'arrow-left']" size="2xl" style="cursor: pointer;" color="#49A9F5" v-on:click="changeCard3"/>
                <v-spacer></v-spacer>
                <font-awesome-icon  :icon="['fas', 'arrow-right']" size="2xl" style="cursor: pointer;" color="#49A9F5" v-on:click="changeCard5" />                
     
            </v-card-actions>

            <div class = "arrowRight" style="text-align:right;">
                             

            </div>
        </v-card>

        

        
    </div>

    <div v-if="card5" style="margin:10% 25%; width: 250px;">
        <v-card
            class="pa-md-4 mx-lg-auto"
            max-width="800"
            width= "800"
            variant="outlined"
            style="margin: 0 auto;"
        >
            <v-card-item >
            
               <div justify="center"> 
                Selecciona la hora



                <v-container class="bg-surface-variant">
                    <v-row justify="center">
                    <v-col
                        v-for="horario in horarios"
                        :key="horario.id"
                        cols="12"
                        sm="4"
                    >
                        <v-sheet class="ma-2 pa-2">
                            <v-btn :disabled="!horario.disponible"
                                class="text-none mb-4"
                                color="#49A9F5"
                                size="small"
                                variant="flat"

                                v-on:click="crearPartido(horario.hora)"
                                >
                                {{horario.hora}}
                            </v-btn>
                            
                            
                        </v-sheet>
                    </v-col>
                    </v-row>
                </v-container>





                   

                
                </div>
            </v-card-item>

            <v-card-actions>
                <font-awesome-icon :icon="['fas', 'arrow-left']" size="2xl" style="cursor: pointer;" color="#49A9F5" v-on:click="changeCard4"/>
                <v-spacer></v-spacer>

                                  
            </v-card-actions>

            <div class = "arrowRight" style="text-align:right;">
                             

            </div>
        </v-card>

        

        
    </div>


    </v-app>

</template>

<script>

import axios from 'axios';
import Vue from "vue";
import Autocomplete from 'vue2-autocomplete-js';
import { Icon } from '@iconify/vue2';

export default {
    components: {
        Autocomplete
    },
    name: "CrearPartido",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),  
        rules: {
            required: value => !!value || 'Field is required',
        },
        horas : ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        horasOcupadas : [],
        idRestoEquipos: [],
        idMisEquipos: [],
        centros: [],
        equipo1: null,
        equipo2: null,
        equipo3: null,
        equipo4: null,
        equipo5: null,
        equipo6: null,
        equipo7: null,
        equipo8: null,
        card5: false,
        card4: false,
        card3: false,
        card2: false,
        card1: true, 
        misEquipos: [],
        restoEquipos: [],
        miEquipo: null,
        otroEquipo: null,
        todosEquipos: [],
        idTodosEquipos: [],
        fecha: null,
        pista: [],
        usuarios: [],
        pistas: [],
        horarios: [],
        tab2: false,   
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
        editarEquipo(){
            this.$store.commit('saveSport', this.deporteSelected); 
            console.log(this.deporteSelected);
            console.log("El jugador mio es: " + this.jugadorMio);
            let jugadores = [];
            for(let i = 0; i< this.usuarios.length; i++){
                if(this.usuarios[i].nombre_completo == this.jugador1 ||
                    this.usuarios[i].nombre_completo == this.jugador2 ||
                    this.usuarios[i].nombre_completo == this.jugador3 ||
                    this.usuarios[i].nombre_completo == this.jugador4 ||
                    this.usuarios[i].nombre_completo == this.jugador5){
                    jugadores.push(this.usuarios[i]);
                }
            }
            console.log("integrantes");
            console.log(jugadores);
            let json = {
                "idEquipo" : this.idEquipo,
                "nombre" : null,
                "integrantes" : jugadores
            };

            
            axios.post('http://localhost:3000/youplay/equipos/editar', json)
            .then(response => {
                console.log(response.data);
                location.reload();
                /*if (response.data.accessToken) {
                console.log("entro")
                localStorage.setItem("token", response.data.accessToken);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
                this.$store.commit('login', response.data.usuario);      
                this.$router.push('/home');
                
                
                }*/
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
        changeCard1(){
            this.card1 = true;
            this.card2 = false;
            this.card3 = false;
            this.card4 = false;
            this.card5 = false;
        },
        changeCard2(){
            this.card2 = true;
            this.card1 = false;
            this.card3 = false;
            this.card4 = false;
            this.card5 = false;
        },
        changeCard3(){
            console.log("*** LA FECHA ES: " + this.fecha);
            this.card3 = true;
            this.card1= false;
            this.card2= false;
            this.card4= false;
            this.card5 = false;
        },
        changeCard4(){
            this.card4 = true;
            this.card1= false;
            this.card2= false; 
            this.card3= false;
            this.card5 = false;             
        },
        changeCard5(){

            let json = {
                "fecha" : this.fecha,
                "idPista" : this.pista,
            };

            
            axios.get('http://localhost:3000/youplay/pistas/' + this.pista + '/disponibilidad/' + this.fecha)
            .then(response => {

                this.horasOcupadas = response.data;
                console.log("*** HORAS OCUPADAS ANTES: " + this.horasOcupadas);





                console.log("el length de horas: " + this.horas.length);
                
                for(let i = 0; i< this.horas.length; i++){
                    let ocupada = false;
                    console.log("*** LA HORA ES: " + this.horas[i]);
                    console.log("*** HORAS OCUPADAS: " + this.horasOcupadas);
                    for(let j = 0; j < this.horasOcupadas.length; j++){

                        console.log("*** entro en el for");
                        const [primera, segunda, tercera] = this.horasOcupadas[j].hora.split(':');
                        let horaArreglada = primera + ":" + segunda;
                        console.log("*** RECORRO FOR -> LA HORA OCUPADA ES: " + horaArreglada);

                        if(this.horas[i] == horaArreglada){
                            console.log("*** entro en el ifff");
                            let franjaHorario = {
                                "id" : i + 1,
                                "hora" : this.horas[i],
                                "disponible" : false,
                            };
                            console.log("*** LA HORA OCUPADA ES: " + this.horas[i]);
                            this.horarios.push(franjaHorario);
                            ocupada = true;
                        } 
                    }

                    if(!ocupada){
                        let franjaHorario = {
                            "id" : i + 1,
                            "hora" : this.horas[i],
                            "disponible" : true,
                        };
                        this.horarios.push(franjaHorario);
                    }
                    
                }
                console.log("*** EL HORARIO ES: " + this.horarios);
                








                
            }).catch(() => {
                this.mensajeLogin = "Login incorrecto";
                const self = this;
                self.animated = true;
                setTimeout(() => {
                    self.animated = false;
                }, 1000)
            });



            



            this.card4 = false;
            this.card1= false;
            this.card2= false; 
            this.card3= false;
            this.card5 = true;             
        },
        seleccionarCentro(centro){
            let urlListarPistasCentro = "http://localhost:3000/youplay/pistas/" + centro.id;
            axios.get(urlListarPistasCentro).then(response => {
                this.pistas = response.data;
                console.log("**** RESTO EQUIPOS: " + this.pistas);
            });
        },
        seleccionarPista(pista){
            this.pista = pista.id;
        },
        crearPartido(hora){

            let equipo1 = null;
            let equipo2 = null;

            console.log("ENTRO EN CREAR PARTIDO ");
            console.log("MI EQUIPO: " + this.miEquipo);

            for(let i = 0; i< this.idMisEquipos.length; i++){
                console.log("FOR MI EQUIPO: " + this.idMisEquipos[i].nombre);
                if(this.idMisEquipos[i].nombre == this.miEquipo){
                    equipo1 = this.idMisEquipos[i].id;
                    console.log("EL EQUIPO 1 SELECCIONADO: " + equipo1);

                }
            }

            for(let j = 0; j< this.idRestoEquipos.length; j++){
                if(this.idRestoEquipos[j].nombre == this.otroEquipo){
                    equipo2 = this.idRestoEquipos[j].id;
                    console.log("EL EQUIPO 2 SELECCIONADO: " + equipo2);

                }
            }


            let json = {
                "fecha" : this.fecha,
                "usuario1" : null,
                "usuario2" : null,
                "equipo1" : equipo1,
                "equipo2" : equipo2,
                "pista" : this.pista,
                "deporte" : "futbol",
                "hora" : hora
            };

            
            axios.post('http://localhost:3000/youplay/partidos/crear', json)
            .then(response => {
                console.log(response.data);
                let usuarioId = this.currentUser.id;
                this.$router.push({ name: 'MisPartidos', params: {usuarioId}});
                
            }).catch(() => {
                this.mensajeLogin = "Login incorrecto";
                document.getElementById("pErrorLogin").style.display = "block";
                const self = this;
                self.animated = true;
                setTimeout(() => {
                    self.animated = false;
                }, 1000)
            });

        }
    },
    
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{
            console.log("el deporte es: " + this.currentSport)
            this.jugador1 = this.currentUser.nombreCompleto;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;

            let urlListarEquipos = "http://localhost:3000/youplay/equipos";
            axios.get(urlListarEquipos).then(response => {
                this.idTodosEquipos = response.data;
                for(let i = 0; i < this.idTodosEquipos.length; i++){
                    this.todosEquipos.push(this.idTodosEquipos[i].nombre);
                }
                let urlListarCentros = "http://localhost:3000/youplay/centros";
                axios.get(urlListarCentros).then(response => {
                    this.centros = response.data;
                });
            });

            
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

    header{
        width: 100%;
        height: 850px;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
    }


    .arrowRight {
        cursor: pointer;
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