
<template>
    <header  id="myHeader"> 
        <v-app v-if="futbol" id="myHeader1">
            <div style="text-align: center; margin-top: 5%; margin-bottom:2%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mi equipo
                
                </span>
                
            </div style="">
            <div style="display:flex; justify-content:center;">
                
                <div>
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        width= "470"
                        variant="outlined"

                    >
                        <v-card-item>
                                <v-text-field
                                    v-model="nombreEquipo"
                                    :rules="[rules.required]"
                                    type="input"
                                ></v-text-field>
                                <v-flex class="ma-2 pa-2" v-for="integrante in integrantes" :key="integrante.id">
                                    <v-sheet class="d-flex mb-6 bg-surface-variant">
                                        <v-sheet class="ma-2 pa-2 me-auto">
                                            <div class="text-h6 mb-1">
                                                {{integrante.nombre_completo}}
                                            </div>
                                        </v-sheet>
                                        <v-sheet class="ma-2 pa-2">
                                            <v-btn   variant="outlined" color="red" v-on:click="eliminarIntegrante(integrante.id)">
                                                Eliminar
                                            </v-btn>
                                        </v-sheet>
                                    </v-sheet>
                                </v-flex>
                        </v-card-item>

                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="añadirIntegrantes()">
                                Añadir Jugador
                            </v-btn>
                            <v-btn variant="outlined" v-on:click="cambiarNombre()">
                                Cambiar Nombre
                            </v-btn>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                


                <div  style="margin-left: 5%;">
                    <div class="text-h6 mb-1" style="text-align:center;">
                        <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                            Chat
                        </span>
                    </div>
                    <v-card
                        id="miDiv"
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        max-height="300"
                        width= "470"
                        variant="outlined"
                        style="overflow-y: scroll;"

                    >
                        <v-card-item>
                                
                                <v-flex  v-for="mensaje in mensajes" :key="mensaje.id">
                                    
                                    <v-sheet class="d-flex  bg-surface-variant">
                                        <div ref="mensajeContainer">
                                            <v-sheet class="ma-2 pa-2 me-auto">
                                                <div  >
                                                    {{mensaje.nombreUsuario}}
                                                </div>
                                                <div class="text-h6 mb-1" >
                                                    {{mensaje.texto}}
                                                </div>
                                            </v-sheet>
                                        </div>
                                        
                                    </v-sheet>
                                </v-flex>
                                
                        </v-card-item>
                        

                    </v-card>

                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        max-height="200"
                        width= "470"
                        variant="outlined"
                        style="margin-top:20px; margin-bottom:20px;"
                    >
                        <v-card-item>
                                
                                
                                
                        </v-card-item>
                        <v-card-actions>
                            <v-text-field
                                    v-model="mensajeIntroducido"
                                    type="input"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn variant="outlined" v-on:click="añadirMensaje()">
                            Enviar
                            </v-btn>

                        </v-card-actions>

                    </v-card>
                </div>
            </div>
                
            
        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">
            <div style="text-align: center; margin-top: 5%; margin-bottom:2%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mi equipo
                
                </span>
                
            </div style="">
            <div style="display:flex; justify-content:center;">
                
                <div>
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        width= "470"
                        variant="outlined"

                    >
                        <v-card-item>
                                <v-text-field
                                    v-model="nombreEquipo"
                                    :rules="[rules.required]"
                                    type="input"
                                ></v-text-field>
                                <v-flex class="ma-2 pa-2" v-for="integrante in integrantes" :key="integrante.id">
                                    <v-sheet class="d-flex mb-6 bg-surface-variant">
                                        <v-sheet class="ma-2 pa-2 me-auto">
                                            <div class="text-h6 mb-1">
                                                {{integrante.nombre_completo}}
                                            </div>
                                        </v-sheet>
                                        <v-sheet class="ma-2 pa-2">
                                            <v-btn   variant="outlined" color="red" v-on:click="eliminarIntegrante(integrante.id)">
                                                Eliminar
                                            </v-btn>
                                        </v-sheet>
                                    </v-sheet>
                                </v-flex>
                        </v-card-item>

                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="añadirIntegrantes()">
                                Añadir Jugador
                            </v-btn>
                            <v-btn variant="outlined" v-on:click="cambiarNombre()">
                                Cambiar Nombre
                            </v-btn>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                


                <div  style="margin-left: 5%;">
                    <div class="text-h6 mb-1" style="text-align:center;">
                        <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                            Chat
                        </span>
                    </div>
                    <v-card
                        id="miDiv"
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        max-height="300"
                        width= "470"
                        variant="outlined"
                        style="overflow-y: scroll;"

                    >
                        <v-card-item>
                                
                                <v-flex  v-for="mensaje in mensajes" :key="mensaje.id">
                                    
                                    <v-sheet class="d-flex  bg-surface-variant">
                                        <div ref="mensajeContainer">
                                            <v-sheet class="ma-2 pa-2 me-auto">
                                                <div  >
                                                    {{mensaje.nombreUsuario}}
                                                </div>
                                                <div class="text-h6 mb-1" >
                                                    {{mensaje.texto}}
                                                </div>
                                            </v-sheet>
                                        </div>
                                        
                                    </v-sheet>
                                </v-flex>
                                
                        </v-card-item>
                        

                    </v-card>

                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        max-height="200"
                        width= "470"
                        variant="outlined"
                        style="margin-top:20px; margin-bottom:20px;"
                    >
                        <v-card-item>
                                
                                
                                
                        </v-card-item>
                        <v-card-actions>
                            <v-text-field
                                    v-model="mensajeIntroducido"
                                    type="input"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn variant="outlined" v-on:click="añadirMensaje()">
                            Enviar
                            </v-btn>

                        </v-card-actions>

                    </v-card>
                </div>
            </div>
                
            
        </v-app>
        <v-app v-if="padel" id="myHeader3">
            <div style="text-align: center; margin-top: 5%; margin-bottom:2%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Mi equipo
                
                </span>
                
            </div style="">
            <div style="display:flex; justify-content:center;">
                
                <div>
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        width= "470"
                        variant="outlined"

                    >
                        <v-card-item>
                                <v-text-field
                                    v-model="nombreEquipo"
                                    :rules="[rules.required]"
                                    type="input"
                                ></v-text-field>
                                <v-flex class="ma-2 pa-2" v-for="integrante in integrantes" :key="integrante.id">
                                    <v-sheet class="d-flex mb-6 bg-surface-variant">
                                        <v-sheet class="ma-2 pa-2 me-auto">
                                            <div class="text-h6 mb-1">
                                                {{integrante.nombre_completo}}
                                            </div>
                                        </v-sheet>
                                        <v-sheet class="ma-2 pa-2">
                                            <v-btn   variant="outlined" color="red" v-on:click="eliminarIntegrante(integrante.id)">
                                                Eliminar
                                            </v-btn>
                                        </v-sheet>
                                    </v-sheet>
                                </v-flex>
                        </v-card-item>

                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="añadirIntegrantes()">
                                Añadir Jugador
                            </v-btn>
                            <v-btn variant="outlined" v-on:click="cambiarNombre()">
                                Cambiar Nombre
                            </v-btn>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                


                <div  style="margin-left: 5%;">
                    <div class="text-h6 mb-1" style="text-align:center;">
                        <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                            Chat
                        </span>
                    </div>
                    <v-card
                        id="miDiv"
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        max-height="300"
                        width= "470"
                        variant="outlined"
                        style="overflow-y: scroll;"

                    >
                        <v-card-item>
                                
                                <v-flex  v-for="mensaje in mensajes" :key="mensaje.id">
                                    
                                    <v-sheet class="d-flex  bg-surface-variant">
                                        <div ref="mensajeContainer">
                                            <v-sheet class="ma-2 pa-2 me-auto">
                                                <div  >
                                                    {{mensaje.nombreUsuario}}
                                                </div>
                                                <div class="text-h6 mb-1" >
                                                    {{mensaje.texto}}
                                                </div>
                                            </v-sheet>
                                        </div>
                                        
                                    </v-sheet>
                                </v-flex>
                                
                        </v-card-item>
                        

                    </v-card>

                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="470"
                        max-height="200"
                        width= "470"
                        variant="outlined"
                        style="margin-top:20px; margin-bottom:20px;"
                    >
                        <v-card-item>
                                
                                
                                
                        </v-card-item>
                        <v-card-actions>
                            <v-text-field
                                    v-model="mensajeIntroducido"
                                    type="input"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn variant="outlined" v-on:click="añadirMensaje()">
                            Enviar
                            </v-btn>

                        </v-card-actions>

                    </v-card>
                </div>
            </div>
                
            
        </v-app>
    </header>
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
    name: "EditarEquipo",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),  
        rules: {
            required: value => !!value || 'Field is required',
        },
        mensajeIntroducido: null,
        idUsuario: null, 
        mensajes: [],
        nombreEquipo: null, 
        idEquipo: null,
        equipos: [],
        futbol: false,
        baloncesto: false,
        padel:false, 
        repuesta:null,
        tab:null,
        deporteSelected:null,
        deportes:null,
        usuario1:null,
        integrantes: [],   
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
            this.$store.commit('saveSport', this.deporteSelected); 
            this.$router.push('/equipos/crear');
        },
        eliminarEquipo(idEquipo){
            let urlEliminarEquipo = "http://localhost:3000/youplay/equipos/" + idEquipo;
            axios.delete(urlEliminarEquipo).then(response => {
                console.log(response);
            }) 
        },
        atras(){
            let usuarioId = this.currentUser.id;
            this.$router.push({ name: 'MisEquipos', params: {usuarioId}});
        },
        eliminarIntegrante(id){
            let urlEliminarIntegrante = "http://localhost:3000/youplay/equipos/borrarIntegrante/" + id;
            axios.delete(urlEliminarIntegrante).then(response => {
                console.log(response);
                let urlListarIntegrantes = "http://localhost:3000/youplay/equipos/obtenerIntegrantes/" + this.idEquipo;
                axios.get(urlListarIntegrantes).then(response => {
                    this.integrantes = [];
                    this.integrantes = response.data;
                }); 
            });
        },
        añadirIntegrantes(){
            var idEquipo = this.idEquipo;
            this.$router.push({ name: 'AñadirIntegrantes', params: {idEquipo}});
        },
        cambiarNombre(){

            let json = {
                "idEquipo" : this.idEquipo,
                "nombre" : this.nombreEquipo,
                "integrantes" : null
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
        añadirMensaje(){

            var currentDate = new Date();
            var month = currentDate.getMonth() + 1;

            console.log("el mensaje es: " + this.mensajeIntroducido);

            let json = {
                "texto" : this.mensajeIntroducido,
                "idUsuario" : this.idUsuario,
                "idEquipo" : this.idEquipo,
                "fecha" : new Date().toJSON().slice(0,10).replace(/-/g,'-')
            }
            axios.post('http://localhost:3000/youplay/mensajes/crear', json)
            .then(response => {
                this.mensajes = [];
                let urlObtenerMensajes = "http://localhost:3000/youplay/mensajes/" + this.idEquipo;
                axios.get(urlObtenerMensajes).then(response => {
                    for(let i = 0; i< response.data.length; i++){
                        let urlObtenerUsuario = "http://localhost:3000/youplay/usuarios/" + response.data[i].usuario;
                        axios.get(urlObtenerUsuario).then(response2 => {
                            console.log("el usuario obtenido es: " + response2.data[0].nombre_completo);
                            let mensajeObtenido = {
                                "id" : response.data[i].id,
                                "texto" : response.data[i].texto,
                                "fecha" : response.data[i].fecha,
                                "equipo" : response.data[i].equipo,
                                "nombreUsuario" : response2.data[0].nombre_completo
                            };

                            this.mensajes.push(mensajeObtenido);
                            ;
                        });
                    }
                    
                });
                
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
    },
    
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{

            
            console.log("++++++ el deporte es: " + this.currentSport);
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

            this.idUsuario = this.currentUser.id;

            this.idEquipo = this.$route.params.idEquipo;
            let urlListarIntegrantes = "http://localhost:3000/youplay/equipos/obtenerIntegrantes/" + this.idEquipo;
            axios.get(urlListarIntegrantes).then(response => {
                this.integrantes = response.data;
            }) 
            console.log(this.integrantes);

            console.log("el iddddd: " + this.idEquipo);

            let urlObtenerEquipo = "http://localhost:3000/youplay/equipos/" + this.idEquipo;
            axios.get(urlObtenerEquipo).then(response => {
                this.nombreEquipo = response.data[0].nombre;
                console.log("el nombre del equipo es: " + this.nombreEquipo);
            });
            
            // mensajes
            let urlObtenerMensajes = "http://localhost:3000/youplay/mensajes/" + this.idEquipo;
            axios.get(urlObtenerMensajes).then(response => {
                for(let i = 0; i< response.data.length; i++){
                    let urlObtenerUsuario = "http://localhost:3000/youplay/usuarios/" + response.data[i].usuario;
                    axios.get(urlObtenerUsuario).then(response2 => {
                        console.log("el usuario obtenido es: " + response2.data[0].nombre_completo);
                        let mensajeObtenido = {
                            "id" : response.data[i].id,
                            "texto" : response.data[i].texto,
                            "fecha" : response.data[i].fecha,
                            "equipo" : response.data[i].equipo,
                            "nombreUsuario" : response2.data[0].nombre_completo
                        };

                        this.mensajes.push(mensajeObtenido);
                        ;
                    });
                }
                
            });

            console.log("Los mensajes: " + this.mensajes);
            
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
        position: relative;
    }

    #inspire{
       width: 100%;
        height: 100%;
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/soccer-match3.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
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

    .scroll {
        overflow-y: scroll;
        
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
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/padel-match.jpg);

         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
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