
<template>
    <header  id="myHeader">
        <v-app v-if="futbol" id="myHeader1">
            <div style="text-align: center; margin-top: 6%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Crea tu equipo
                    </span>
            </div>
            
            <div style="margin: 15px auto; width: auto;">
                <v-card
                    class="pa-md-4 .mx-auto"
                    max-width="470"
                    width= "470"
                    variant="outlined"
                >
                    <v-card-item>
                        <v-text-field
                            v-model="nombreEquipo"
                            :rules="[rules.required]"
                            label="Nombre del equipo"
                            type="input"
                        ></v-text-field>
                        <v-autocomplete
                            v-model="jugador1"
                            :items="itemsUsuario"
                            :label='this.currentUser.nombreCompleto'
                            :disabled="true"
                        ></v-autocomplete>

                        <v-autocomplete
                            v-model="jugador2"
                            :items="itemsUsuario"
                            label="Jugador 2"
                        ></v-autocomplete>

                        <v-autocomplete
                            v-model="jugador3"
                            :items="itemsUsuario"
                            label="Jugador 3"
                        ></v-autocomplete>

                        <v-autocomplete
                            v-model="jugador4"
                            :items="itemsUsuario"
                            label="Jugador 4"
                        ></v-autocomplete> 

                        <v-autocomplete
                            v-model="jugador5"
                            :items="itemsUsuario"
                            label="Jugador 5"
                        ></v-autocomplete>   
                    </v-card-item>            
            </v-card>
                </div>
                <div style="text-align: center; margin-top: 10px;">
                <v-btn
                class="text-none mb-4"
                color="indigo-darken-3"
                size="small"
                variant="flat"

                v-on:click="crearEquipo"
                >
                Crear equipo
                </v-btn>
                <v-btn
                class="text-none mb-4"
                color="indigo-darken-3"
                size="small"
                variant="flat"
                style="margin-left:10px;"
                v-on:click="atras()"
                >
                Atrás
                </v-btn>
                
                </div>
                
                
        
        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">
            <div style="text-align: center; margin-top: 6%;">
            <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Crea tu equipo
                
                </span>
            </div>
            
            <div style="margin: 15px auto; width: auto;">
                <v-card
                    class="pa-md-4 .mx-auto"
                    max-width="470"
                    width= "470"
                    variant="outlined"

                >
                <v-card-item>
                <v-text-field
                    v-model="nombreEquipo"
                    :rules="[rules.required]"
                    label="Nombre del equipo"
                    type="input"
                ></v-text-field>
                <v-autocomplete
                    v-model="jugador1"
                    :items="itemsUsuario"
                    :label='this.currentUser.nombreCompleto'
                    :disabled="true"
                ></v-autocomplete>

                <v-autocomplete
                    v-model="jugador2"
                    :items="itemsUsuario"
                    label="Jugador 2"
                ></v-autocomplete>

                <v-autocomplete
                    v-model="jugador3"
                    :items="itemsUsuario"
                    label="Jugador 3"
                ></v-autocomplete>

                <v-autocomplete
                    v-model="jugador4"
                    :items="itemsUsuario"
                    label="Jugador 4"
                ></v-autocomplete> 

                <v-autocomplete
                    v-model="jugador5"
                    :items="itemsUsuario"
                    label="Jugador 5"
                ></v-autocomplete>   
                </v-card-item>            
                </v-card>
            </div>
                <div style="text-align: center; margin-top: 10px;">
                <v-btn
                class="text-none mb-4"
                color="indigo-darken-3"
                size="small"
                variant="flat"

                v-on:click="crearEquipo"
                >
                Crear equipo
                </v-btn>
                <v-btn
                class="text-none mb-4"
                color="indigo-darken-3"
                size="small"
                variant="flat"
                style="margin-left:10px;"
                v-on:click="atras()"
                >
                Atrás
                </v-btn>
                
                </div>
                
              
        </v-app>
        <v-app v-if="padel" id="myHeader3">
            <div style="text-align: center; margin-top: 10%;">
            <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                
                Crea tu equipo
                
                </span>
            </div>
            
            <div style="margin: 15px auto; width: auto;">
                <v-card
                    class="pa-md-4 .mx-auto"
                    max-width="470"
                    width= "470"
                    variant="outlined"

                >
                <v-card-item>
                <v-text-field
                    v-model="nombreEquipo"
                    :rules="[rules.required]"
                    label="Nombre del equipo"
                    type="input"
                ></v-text-field>
                <v-autocomplete
                    v-model="jugador1"
                    :items="itemsUsuario"
                    :label='this.currentUser.nombreCompleto'
                    :disabled="true"
                ></v-autocomplete>

                <v-autocomplete
                    v-model="jugador2"
                    :items="itemsUsuario"
                    label="Jugador 2"
                ></v-autocomplete>
        
                </v-card-item>            
                </v-card>
            </div>
                <div style="text-align: center; margin-top: 10px;">
                <v-btn
                class="text-none mb-4"
                color="indigo-darken-3"
                size="small"
                variant="flat"

                v-on:click="crearEquipo"
                >
                Crear equipo
                </v-btn>
                <v-btn
                class="text-none mb-4"
                color="indigo-darken-3"
                size="small"
                variant="flat"
                style="margin-left:10px;"
                v-on:click="atras()"
                >
                Atrás
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
    name: "Home",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),  
        rules: {
            required: value => !!value || 'Field is required',
        }, 
        nombreEquipo:'',
        itemsUsuario: [], 
        repuesta:null,
        futbol: false,
        baloncesto: false,
        padel:false,
        tab:null,
        deporteSelected:null,
        deportes:null,
        jugador1: '',
        jugador2: '',
        jugador3: '',
        jugador4: '',
        jugador5: '',
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
        crearEquipo(){
            let integrantes = [];
            for(let i = 0; i< this.usuarios.length; i++){
                if(this.usuarios[i].nombre_completo == this.jugador1 ||
                    this.usuarios[i].nombre_completo == this.jugador2 ||
                    this.usuarios[i].nombre_completo == this.jugador3 ||
                    this.usuarios[i].nombre_completo == this.jugador4 ||
                    this.usuarios[i].nombre_completo == this.jugador5){
                    integrantes.push(this.usuarios[i]);
                }
            }
            console.log("integrantes");
            console.log(integrantes);
            console.log(".-.-.-.-.-.- el current sport es: " + this.currentSport);
            let json = {
                "deporte" : this.currentSport,
                "nombre" : this.nombreEquipo,
                "integrantes" : integrantes
            };

            
            axios.post('http://localhost:3000/youplay/equipos/crear', json)
            .then(response => {
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
    },
    
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{
            console.log("-+-+-+-+-+- el deporte es: " + this.currentSport)
            this.jugador1 = this.currentUser.nombreCompleto;

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


            /*
            localStorage.removeItem('token');
            this.$store.commit('logout');
            console.log(this.currentUser);
            this.$router.push('/');
            this.$router.go();
            */
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
            let urlListarUsuarios = "http://localhost:3000/youplay/usuarios";
            axios.get(urlListarUsuarios).then(response => {
                /*for(var i = 0; i< response.data.length ; i++){
                    var usuario = {id:response.data[i].id, email:response.data[i].email, nombre_completo:response.data[i].nombre_completo}
                    console.log(usuario);
                    this.usuarios.push(usuario);
                }*/
                this.usuarios = response.data;
                //console.log("los usuarios son: " + this.usuarios);

                for(let i = 0; i< this.usuarios.length; i++){
                    let itemUsuarioData = {
                        text: this.usuarios[i].nombre_completo,
                        value: this.usuarios[i].id
                    }
                    if(this.usuarios[i].nombre_completo != this.currentUser.nombreCompleto){
                        this.itemsUsuario.push(this.usuarios[i].nombre_completo);
                    }
                }

                //console.log("los items de los usuarios son: " + this.itemsUsuario);
                //console.log("Mi usuario es: " +  this.currentUser.nombreCompleto);
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