
<template>
    <header  id="myHeader">
        <v-app v-if="futbol" id="myHeader1">
            <div v-if="card1">
                <div style="text-align: center; margin-top: 6%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Elige los equipos
                </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div style="display: inline-block;"> 
                            

                            </div>
                        </v-card-item>

                        <v-card-actions>
                            <v-autocomplete
                            v-model="miEquipo"
                            :items="misEquipos"
                            label='Elige uno de tus equipos'
                            ></v-autocomplete>
                            <v-spacer></v-spacer>
                            VS
                            <v-spacer></v-spacer>
                            <v-autocomplete
                                v-model="otroEquipo"
                                :items="restoEquipos"
                                label="Elige tu contrincante"
                            ></v-autocomplete>
                            
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                            <v-spacer></v-spacer>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" color="#49A9F5" size="2xl" v-on:click="changeCard2" />
                        </v-card-actions>
                    </v-card>

                </div>    
            </div>

            <div v-if="card2">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una fecha
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
                            
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
            </div>

            <div v-if="card3">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige un centro
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 

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
            </div>

            <div v-if="card4">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una pista
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
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
            </div>

            <div v-if="card5">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una hora
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "400"
                        variant="outlined"
                        style="margin: 0 auto;"
                    >
                        <v-card-item >
                        
                        <div justify="center"> 

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
            </div>
        </v-app>
        <v-app v-if="baloncesto" id="myHeader2">
            <div v-if="card1">
                <div style="text-align: center; margin-top: 6%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Elige los equipos
                </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div style="display: inline-block;"> 
                            

                            </div>
                        </v-card-item>

                        <v-card-actions>
                            <v-autocomplete
                            v-model="miEquipo"
                            :items="misEquipos"
                            label='Elige uno de tus equipos'
                            ></v-autocomplete>
                            <v-spacer></v-spacer>
                            VS
                            <v-spacer></v-spacer>
                            <v-autocomplete
                                v-model="otroEquipo"
                                :items="restoEquipos"
                                label="Elige tu contrincante"
                            ></v-autocomplete>
                            
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                            <v-spacer></v-spacer>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" color="#49A9F5" size="2xl" v-on:click="changeCard2" />
                        </v-card-actions>
                    </v-card>

                </div>    
            </div>

            <div v-if="card2">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una fecha
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
                            
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
            </div>

            <div v-if="card3">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige un centro
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 

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
            </div>

            <div v-if="card4">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una pista
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
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
            </div>

            <div v-if="card5">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una hora
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "400"
                        variant="outlined"
                        style="margin: 0 auto;"
                    >
                        <v-card-item >
                        
                        <div justify="center"> 

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
            </div>
        </v-app>
        <v-app v-if="tenis" id="myHeader3">
            <div v-if="card1">
                <div style="text-align: center; margin-top: 6%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Elige los equipos
                </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div style="display: inline-block;"> 
                            

                            </div>
                        </v-card-item>

                        <v-card-actions>
                            <v-autocomplete
                            v-model="jugador1"
                            :items="usuarios"
                            :label='this.currentUser.nombreCompleto'
                            :disabled="true"
                            ></v-autocomplete>
                            <v-spacer></v-spacer>
                            VS
                            <v-spacer></v-spacer>
                            <v-autocomplete
                                v-model="jugador2"
                                :items="itemsUsuario"
                                label="Elige tu contrincante"
                            ></v-autocomplete>
                            
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                            <v-spacer></v-spacer>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" color="#49A9F5" size="2xl" v-on:click="changeCard2" />
                        </v-card-actions>
                    </v-card>

                </div>    
            </div>

            <div v-if="card2">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una fecha
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
                            
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
            </div>

            <div v-if="card3">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige un centro
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 

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
            </div>

            <div v-if="card4">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una pista
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
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
            </div>

            <div v-if="card5">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una hora
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "400"
                        variant="outlined"
                        style="margin: 0 auto;"
                    >
                        <v-card-item >
                        
                        <div justify="center"> 

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
            </div>
        </v-app>
        <v-app v-if="padel" id="myHeader4">
            <div v-if="card1">
                <div style="text-align: center; margin-top: 6%;">
                <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                    Elige los equipos
                </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div style="display: inline-block;"> 
                            

                            </div>
                        </v-card-item>

                        <v-card-actions>
                            <v-autocomplete
                            v-model="miEquipo"
                            :items="misEquipos"
                            label='Elige uno de tus equipos'
                            ></v-autocomplete>
                            <v-spacer></v-spacer>
                            VS
                            <v-spacer></v-spacer>
                            <v-autocomplete
                                v-model="otroEquipo"
                                :items="restoEquipos"
                                label="Elige tu contrincante"
                            ></v-autocomplete>
                            
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn variant="outlined" v-on:click="atras()">
                                Atras
                            </v-btn>
                            <v-spacer></v-spacer>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" color="#49A9F5" size="2xl" v-on:click="changeCard2" />
                        </v-card-actions>
                            
                    </v-card>

                </div>    
            </div>

            <div v-if="card2">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una fecha
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
                            
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
            </div>

            <div v-if="card3">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige un centro
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 

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
            </div>

            <div v-if="card4">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una pista
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "800"
                        variant="outlined"

                    >
                        <v-card-item>
                        <div > 
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
            </div>

            <div v-if="card5">
                <div style="text-align: center; margin-top: 6%;">
                    <span style="color: white; text-decoration: none; font-weight: bold; font-size: 30px;">
                        Elige una hora
                    </span>
                </div>
                <div style="margin: 15px auto; width: auto;">
                    <v-card
                        class="pa-md-4 mx-lg-auto"
                        max-width="800"
                        width= "400"
                        variant="outlined"
                        style="margin: 0 auto;"
                    >
                        <v-card-item >
                        
                        <div justify="center"> 

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
        jugador1: null,
        jugador2: null,
        card5: false,
        card4: false,
        card3: false,
        card2: false,
        card1: true, 
        futbol: false,
        baloncesto: false,
        tenis:false,
        padel:false, 
        misEquipos: [],
        restoEquipos: [],
        miEquipo: null,
        otroEquipo: null,
        fecha: null,
        pista: null,
        usuarios: [],
        itemsUsuario: [],
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
            if(this.miEquipo != null && this.otroEquipo != null){
                this.card2 = true;
                this.card1 = false;
                this.card3 = false;
                this.card4 = false;
                this.card5 = false;
            }
            if(this.tenis && this.jugador1 != null && this.jugador2 != null){
                this.card2 = true;
                this.card1 = false;
                this.card3 = false;
                this.card4 = false;
                this.card5 = false;
            }
        },
        changeCard3(){
            if(this.fecha != null){
                this.card3 = true;
                this.card1 = false;
                this.card2 = false;
                this.card4 = false;
                this.card5 = false;
            }            
        },
        changeCard4(){
            if(this.pistas.length != 0){
                this.card4 = true;
                this.card1= false;
                this.card2= false; 
                this.card3= false;
                this.card5 = false;
            }         
        },
        changeCard5(){

            if(this.pista != null){
                console.log("**** PISTA ****" + this.pista);
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
            }

                         
        },
        seleccionarCentro(centro){
            let urlListarPistasCentro = "http://localhost:3000/youplay/pistas/" + centro.id;
            axios.get(urlListarPistasCentro).then(response => {
                this.pistas = response.data;
            });
        },
        atras(){
            let usuarioId = this.currentUser.id;
            this.$router.push({ name: 'MisPartidos', params: {usuarioId}});
        },
        seleccionarPista(pista){
            this.pista = pista.id;
        },
        crearPartido(hora){

            let equipo1 = null;
            let equipo2 = null;

            for(let i = 0; i< this.idMisEquipos.length; i++){
                if(this.idMisEquipos[i].nombre == this.miEquipo){
                    equipo1 = this.idMisEquipos[i].id;

                }
            }

            for(let j = 0; j< this.idRestoEquipos.length; j++){
                if(this.idRestoEquipos[j].nombre == this.otroEquipo){
                    equipo2 = this.idRestoEquipos[j].id;

                }
            }            
            
            let idJugador2 = null;
            for(let i = 0; i< this.usuarios.length; i++){
                if(this.usuarios[i].nombre_completo == this.jugador2){
                    idJugador2 = this.usuarios[i].id;
                }
            }

            let json = null;

            if(this.tenis){
                json = {
                    "fecha" : this.fecha,
                    "usuario1" : this.currentUser.id,
                    "usuario2" : idJugador2,
                    "equipo1" : null,
                    "equipo2" : null,
                    "pista" : this.pista,
                    "deporte" : this.currentSport,
                    "hora" : hora
                };
            } else {
                json = {
                    "fecha" : this.fecha,
                    "usuario1" : null,
                    "usuario2" : null,
                    "equipo1" : equipo1,
                    "equipo2" : equipo2,
                    "pista" : this.pista,
                    "deporte" : this.currentSport,
                    "hora" : hora
                };
            }

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

            // Si es tenis

            if(this.tenis){
                let urlListarUsuarios = "http://localhost:3000/youplay/usuarios";
                axios.get(urlListarUsuarios).then(response => {
                    this.usuarios = response.data;
                    console.log("*** LOS USUARIOS SON ***: " + this.usuarios);
                    for(let i = 0; i< this.usuarios.length; i++){
                        let itemUsuarioData = {
                            text: this.usuarios[i].nombre_completo,
                            value: this.usuarios[i].id
                        }
                        if(this.usuarios[i].nombre_completo != this.currentUser.nombreCompleto){
                            console.log("el itemsUsuario es: " + this.itemsUsuario);
                            console.log("el usuario dentro del if es: " + this.usuarios[i].nombre_completo);
                            this.itemsUsuario.push(this.usuarios[i].nombre_completo);
                        }
                    }
                    console.log("los items usuario: " + this.itemsUsuario);
                }) 
            }

            this.jugador1 = this.currentUser.nombreCompleto;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;

            let urlListarEquipos = "http://localhost:3000/youplay/usuarios/" + this.currentUser.id + "/equipos/" + this.currentSport;
            axios.get(urlListarEquipos).then(response => {
                let misEquipos = response.data;
                this.idMisEquipos = response.data;
                for(let i = 0; i< misEquipos.length; i++){
                    this.misEquipos.push(misEquipos[i].nombre);
                }
            });
            
            let urlListarRestoEquipos = "http://localhost:3000/youplay/usuarios/" + this.currentUser.id + "/restoEquipos/" + this.currentSport;
            axios.get(urlListarRestoEquipos).then(response => {
                let restoEquipos = response.data;
                this.idRestoEquipos = response.data;
                for(let i = 0; i< restoEquipos.length; i++){
                    this.restoEquipos.push(restoEquipos[i].nombre);
                }
                console.log("**** RESTO EQUIPOS: " + this.restoEquipos);
            });



            let urlListarCentros = "http://localhost:3000/youplay/centros";
            axios.get(urlListarCentros).then(response => {
                this.centros = response.data;
            });





            console.log(this.integrantes);
   
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