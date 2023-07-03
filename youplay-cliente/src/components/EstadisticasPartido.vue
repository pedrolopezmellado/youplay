
<template>
    <header  id="myHeader">
        <v-app v-if="futbol" id="myHeader1">
            <div style="text-align: center; margin-top: 2%; ">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <v-card
                style="margin-top:2%;"
                    class="pa-md-4 mx-lg-auto"
                    max-width="800"
                    width= "800"
                    variant="outlined"

                >
                    <v-card-item>
                    <div v-if="primeraModal"> 
                    
                            <v-row justify="center">
                                <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/escudo.png">
                                <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/escudoEquipo2.png">

                                <div class="text-h4 mb-1">

                                    {{this.equipo1.nombre}}
                                    
                                    <v-spacer></v-spacer> VS 
                                    <v-spacer></v-spacer>
                                    {{this.equipo2.nombre}}
                                </div>
                            
                            </v-row>

                            <v-row justify="center" >
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado != null">
                                <div class="text-h4 mb-1">
                                {{this.partido.resultado}}
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <div class="text-h5 mb-1">
                                El partido no ha terminado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="terminarPartido"
                                    >
                                    Terminar Partido
                                    </v-btn> 
                            </v-row>

                            <v-row justify="center">
                                <div class="text-overline mb-1">
                                jugadores
                                </div>
                            </v-row>



                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%" v-if="this.integrantesEquipo1[0] != null">
                                {{this.integrantesEquipo1[0].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%" v-if="this.integrantesEquipo2[0] != null">

                                {{this.integrantesEquipo2[0].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%" v-if="this.integrantesEquipo1[1] != null">
                                {{this.integrantesEquipo1[1].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%" v-if="this.integrantesEquipo2[1] != null">

                                {{this.integrantesEquipo2[1].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%" v-if="this.integrantesEquipo1[2] != null">
                                {{this.integrantesEquipo1[2].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%" v-if="this.integrantesEquipo2[2] != null">

                                {{this.integrantesEquipo2[2].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row>
                                <div class="text-h6 mb-1" style="margin-left:10%" v-if="this.integrantesEquipo1[3] != null">
                                {{this.integrantesEquipo1[3].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%" v-if="this.integrantesEquipo2[3] != null">

                                {{this.integrantesEquipo2[3].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%" v-if="this.integrantesEquipo1[4] != null">
                                {{this.integrantesEquipo1[4].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%" v-if="this.integrantesEquipo2[4] != null">

                                {{this.integrantesEquipo2[4].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>



                        </div>

                        <div v-if="segundaModal">
                            <v-row justify="center">
                            <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/escudo.png">
                            <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/escudoEquipo2.png">

                            <div class="text-h4 mb-1">
                                {{this.equipo1.nombre}} 
                                <v-spacer></v-spacer> VS 
                                <v-spacer></v-spacer>
                                {{this.equipo2.nombre}}
                            </div>
                        
                            </v-row>

                            <v-row justify="center" style="margin-top:20%;">
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                    <v-text-field
                                        label="Resultado Local"
                                        v-model="resultado1"
                                    ></v-text-field>
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">
                                    <v-text-field
                                        label="Resultado Visitante"
                                        v-model="resultado2"
                                    ></v-text-field>
                                </div>
                            </v-row>


                            <v-row justify="center" >
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="enviarResultado"
                                    >
                                    Enviar Resultado
                                    </v-btn>
                            </v-row>
                        </div>
                    </v-card-item>

                    <v-card-actions>

                    </v-card-actions>
                    
                    
                    
                </v-card>
            </div>

            <div style="text-align: center; margin-top:20px;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>
        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">
            <div style="text-align: center; margin-top: 2%; ">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <v-card
                style="margin-top:2%;"
                    class="pa-md-4 mx-lg-auto"
                    max-width="800"
                    width= "800"
                    variant="outlined"

                >
                    <v-card-item>
                    <div v-if="primeraModal"> 
                    
                            <v-row justify="center">
                                <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/escudo.png">
                                <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/escudoEquipo2.png">

                                <div class="text-h4 mb-1">

                                    {{this.equipo1.nombre}}
                                    
                                    <v-spacer></v-spacer> VS 
                                    <v-spacer></v-spacer>
                                    {{this.equipo2.nombre}}
                                </div>
                            
                            </v-row>

                            <v-row justify="center" >
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado != null">
                                <div class="text-h4 mb-1">
                                {{this.partido.resultado}}
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <div class="text-h5 mb-1">
                                El partido no ha terminado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="terminarPartido"
                                    >
                                    Terminar Partido
                                    </v-btn> 
                            </v-row>

                            <v-row justify="center">
                                <div class="text-overline mb-1">
                                jugadores
                                </div>
                            </v-row>

                            <v-flex class="ma-2 pa-2" v-for="integrante in integrantes" :key="integrante.id">
                            
                            </v-flex>



                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[0].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[0].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[1].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[1].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[2].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[2].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[3].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[3].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[4].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[4].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>



                        </div>

                        <div v-if="segundaModal">
                            <v-row justify="center">
                            <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/escudo.png">
                            <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/escudoEquipo2.png">

                            <div class="text-h4 mb-1">
                                {{this.equipo1.nombre}} 
                                <v-spacer></v-spacer> VS 
                                <v-spacer></v-spacer>
                                {{this.equipo2.nombre}}
                            </div>
                        
                            </v-row>

                            <v-row justify="center" style="margin-top:20%;">
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                    <v-text-field
                                        label="Resultado Local"
                                        v-model="resultado1"
                                    ></v-text-field>
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">
                                    <v-text-field
                                        label="Resultado Visitante"
                                        v-model="resultado2"
                                    ></v-text-field>
                                </div>
                            </v-row>


                            <v-row justify="center" >
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="enviarResultado"
                                    >
                                    Enviar Resultado
                                    </v-btn>
                            </v-row>
                        </div>
                    </v-card-item>

                    <v-card-actions>

                    </v-card-actions>
                    
                    
                    
                </v-card>
            </div>

            <div style="text-align: center; margin-top:20px;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>
        </v-app>
        <v-app v-if="padel" id="myHeader3">
            <div style="text-align: center; margin-top: 2%; ">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <v-card
                style="margin-top:2%;"
                    class="pa-md-4 mx-lg-auto"
                    max-width="800"
                    width= "800"
                    variant="outlined"

                >
                    <v-card-item>
                    <div v-if="primeraModal"> 
                    
                            <v-row justify="center">
                                <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/escudo.png">
                                <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/escudoEquipo2.png">

                                <div class="text-h4 mb-1">

                                    {{this.equipo1.nombre}}
                                    
                                    <v-spacer></v-spacer> VS 
                                    <v-spacer></v-spacer>
                                    {{this.equipo2.nombre}}
                                </div>
                            
                            </v-row>

                            <v-row justify="center" >
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado != null">
                                <div class="text-h4 mb-1">
                                {{this.partido.resultado}}
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <div class="text-h5 mb-1">
                                El partido no ha terminado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="terminarPartido"
                                    >
                                    Terminar Partido
                                    </v-btn> 
                            </v-row>

                            <v-row justify="center">
                                <div class="text-overline mb-1">
                                jugadores
                                </div>
                            </v-row>

                            <v-flex class="ma-2 pa-2" v-for="integrante in integrantes" :key="integrante.id">
                            
                            </v-flex>



                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[0].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[0].nombre_completo}}
                                </div>
                            </v-row>
                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.integrantesEquipo1[1].nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.integrantesEquipo2[1].nombre_completo}}
                                </div>
                            </v-row>
                            
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>



                        </div>

                        <div v-if="segundaModal">
                            <v-row justify="center">
                            <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/escudo.png">
                            <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/escudoEquipo2.png">

                            <div class="text-h4 mb-1">
                                {{this.equipo1.nombre}} 
                                <v-spacer></v-spacer> VS 
                                <v-spacer></v-spacer>
                                {{this.equipo2.nombre}}
                            </div>
                        
                            </v-row>

                            <v-row justify="center" style="margin-top:20%;">
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                    <v-text-field
                                        label="Resultado Local"
                                        v-model="resultado1"
                                    ></v-text-field>
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">
                                    <v-text-field
                                        label="Resultado Visitante"
                                        v-model="resultado2"
                                    ></v-text-field>
                                </div>
                            </v-row>


                            <v-row justify="center" >
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="enviarResultado"
                                    >
                                    Enviar Resultado
                                    </v-btn>
                            </v-row>
                        </div>
                    </v-card-item>

                    <v-card-actions>

                    </v-card-actions>
                    
                    
                    
                </v-card>
            </div>

            <div style="text-align: center; margin-top:20px;">
                <v-btn variant="outlined" v-on:click="atras()">
                            Atras
                        </v-btn>
            </div>
        </v-app>
        <v-app v-if="tenis" id="myHeader4">
            <div style="text-align: center; margin-top: 2%; ">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Mis partidos
                </span>
                <v-card
                style="margin-top:2%;"
                    class="pa-md-4 mx-lg-auto"
                    max-width="800"
                    width= "800"
                    variant="outlined"

                >
                    <v-card-item>
                    <div v-if="primeraModal"> 
                    
                            <v-row justify="center">
                                <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/alcaraz.png">
                                <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/federer.png">

                                <div class="text-h4 mb-1">
                                    {{this.jugadorTenis1.nombre_completo}}
                                    
                                    <v-spacer></v-spacer> VS 
                                    <v-spacer></v-spacer>
                                    {{this.jugadorTenis2.nombre_completo}}
                                </div>
                            
                            </v-row>

                            <v-row justify="center" >
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado != null">
                                <div class="text-h4 mb-1">
                                {{this.partido.resultado}}
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <div class="text-h5 mb-1">
                                El partido no ha terminado
                                </div>
                            </v-row>

                            <v-row justify="center" v-if="this.partido.resultado == null">
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="terminarPartido"
                                    >
                                    Terminar Partido
                                    </v-btn> 
                            </v-row>

                            <v-row justify="center">
                                <div class="text-overline mb-1">
                                jugadores
                                </div>
                            </v-row>

                            <v-flex class="ma-2 pa-2" v-for="integrante in integrantes" :key="integrante.id">
                            
                            </v-flex>



                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                {{this.jugadorTenis1.nombre_completo}}
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">

                                {{this.jugadorTenis2.nombre_completo}}
                                </div>
                            </v-row>

                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>
                            <v-row >
                                
                            </v-row>



                        </div>

                        <div v-if="segundaModal">
                            <v-row justify="center">
                            <img style="position:absolute;margin-top:50px;margin-right:70%;height:200px;" src="../assets/alcaraz.png">
                            <img style="position:absolute;margin-top:50px;margin-left:70%;height:200px;" src="../assets/federer.png">

                            <div class="text-h4 mb-1">
                                {{this.jugadorTenis1.nombre_completo}} 
                                <v-spacer></v-spacer> VS 
                                <v-spacer></v-spacer>
                                {{this.jugadorTenis2.nombre_completo}}
                            </div>
                        
                            </v-row>

                            <v-row justify="center" style="margin-top:20%;">
                                <div class="text-overline mb-1">
                                resultado
                                </div>
                            </v-row>

                            <v-row >
                                <div class="text-h6 mb-1" style="margin-left:10%">
                                    <v-text-field
                                        label="Resultado Local"
                                        v-model="resultado1"
                                    ></v-text-field>
                                </div>
                                <div class="text-h6 ml-auto" justify="right" style="margin-right:10%">
                                    <v-text-field
                                        label="Resultado Visitante"
                                        v-model="resultado2"
                                    ></v-text-field>
                                </div>
                            </v-row>


                            <v-row justify="center" >
                                <v-btn

                                    class="text-none mb-4 d-flex"
                                    color="indigo-darken-3"
                                    size="small"
                                    variant="flat"
                                    style="margin-top:2%;"

                                    v-on:click="enviarResultado"
                                    >
                                    Enviar Resultado
                                    </v-btn>
                            </v-row>
                        </div>
                    </v-card-item>

                    <v-card-actions>

                    </v-card-actions>
                    
                    
                    
                </v-card>
            </div>

            <div style="text-align: center; margin-top:20px;">
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
        primeraModal: true,
        segundaModal: false,
        resultado1: null,
        resultado2: null,
        terminadoModal: false,
        contador: null,
        jugadorTenis1: null,
        jugadorTenis2: null,
        integrantesEquipo1: [], 
        integrantesEquipo2: [],
        equipos: [],
        futbol: false,
        baloncesto: false,
        padel:false,
        tenis:false, 
        equipo1 : null, 
        equipo2: null,
        idPartido: null,
        partido: null, 
        partidosLista: [],
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
        buscarEquipo(){
            this.$store.commit('saveSport', this.deporteSelected); 
            this.$router.push('/equipos');
        },
        atras(){
            let usuarioId = this.currentUser.id;
            this.$router.push({ name: 'MisPartidos', params: {usuarioId}});
        },
        terminarPartido(){
            this.primeraModal = false;
            this.segundaModal = true;
        },
        enviarResultado(){
            let resultadoFinal = this.resultado1 + "-" + this.resultado2;
            let json = {
                "idPartido" : this.partido.id,
                "resultado" : resultadoFinal
            };

            axios.post('http://localhost:3000/youplay/partidos/enviarResultado', json)
            .then(response => {
                location.reload(); 
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

            this.idPartido = this.$route.params.idPartido;

            console.log("el id del partido es: " + this.idPartido);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
            let urlObtenerPartido = "http://localhost:3000/youplay/partidos/" + this.idPartido;
            axios.get(urlObtenerPartido).then(response => {
                this.partido = response.data[0];

                if(this.tenis){
                    let urlObtenerJugador1 = "http://localhost:3000/youplay/usuarios/" + this.partido.usuario1;
                    axios.get(urlObtenerJugador1).then(response => {
                        this.jugadorTenis1 = response.data[0];
                        let urlObtenerJugador2 = "http://localhost:3000/youplay/usuarios/" + this.partido.usuario2;
                        axios.get(urlObtenerJugador2).then(response2 => {
                            this.jugadorTenis2 = response2.data[0];
                        });
                    });
                } else {
                    let urlObtenerEquipo1 = "http://localhost:3000/youplay/equipos/" + this.partido.equipo1;
                    let urlObtenerEquipo2 = "http://localhost:3000/youplay/equipos/" + this.partido.equipo2;
                
                    axios.get(urlObtenerEquipo1).then(response => {
                        this.equipo1 = response.data[0];

                        axios.get(urlObtenerEquipo2).then(response => {
                            this.equipo2 = response.data[0];

                            let urlListarIntegrantes = "http://localhost:3000/youplay/equipos/obtenerIntegrantes/" + this.equipo1.id;
                            axios.get(urlListarIntegrantes).then(response => {
                                this.integrantesEquipo1 = response.data;
                                console.log("Los integrantes son: " + this.integrantesEquipo1);
                            });

                            let urlListarIntegrantes2 = "http://localhost:3000/youplay/equipos/obtenerIntegrantes/" + this.equipo2.id;
                            axios.get(urlListarIntegrantes2).then(response => {
                                this.integrantesEquipo2 = response.data;
                            });


                        });

                    });
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