<template>
    <div>
        <div style="position:absolute; padding-left:40px; padding-top:40px; ">
            <a :href="$router.resolve({name:'Contenido'}).href" style="text-decoration: none;">
                <v-btn color="red" dark >Atrás</v-btn>
            </a>
        </div>
        <div style = "padding-top: 60px; ">
            <img :src="getImgUrl(libro.imagen)" width="240" height="343"  >
        </div>
        <h1 class="text-center mt-3" style = "padding-top: 10px; " >{{libro.titulo}}</h1>
            <br/>
            <h3 class="text-center mt-3" >{{libro.autor}} (Autor)</h3> <br/>
            <h4 class="text-center mt-3" >{{libro.editorial}} (Editorial)</h4>
        <div style="text-align: left;  margin-left:120px;">

        </div>

        

        
        <br/><br/><br/>
            <h4 class="text-center mt-3" >Comentarios del libro</h4>
        <br/>

        <v-row no-gutters>
            <v-col v-for="comentario in listaComentarios" :key="comentario.idcomentario" cols="12" sm="6">
                <v-card class="pa-2" outlined tile>
                        <div style = "padding-left: 400px; padding-top: 26px; position:absolute;">
                            <h4 class="text-center mt-3" >{{comentario.usuario}}</h4>
                        </div>
                        <br/>
                        <img src="../assets/fotoPerfil.jpg" width="30" height="30">
                        <br/> <br/>
                            <h4 class="text-center mt-3" >{{comentario.texto}}</h4>
                        <br/>
                </v-card>
            </v-col>
        </v-row>

        <v-container>
            <div class="d-flex flex-column justify-space-between align-center">
                <template>
                    <div class="text-center">
                        <v-pagination  v-model="page" :length="totalPaginas" @input="cambio">
                        </v-pagination>
                    </div>
                </template>
            </div>
        </v-container>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "DetallesLibro",
    computed:{
        currentUser() {
            return this.$store.state.user;
        }
    },
    methods: {
        getImgUrl(img) {
            return require('../assets/'+ img)
        }, 
        cambio(value){
            console.log("click");
            this.pagina = value - 1;
            console.log(value);
            let urlComentarios = "http://localhost:3000/biblioteca/libros/" + this.$route.params.idLibro + "/comentarios?page=" + 
                this.pagina + "&size=6";
            axios.get(urlComentarios).then(response => {
                this.listaComentarios = response.data;
                this.respuesta = this.listaComentarios.pop();
            }) 
        }
    },
    data () {
      return {
        libro:null,
        listaComentarios:null,
        pagina:0,
        respuesta:null,
        totalPaginas:0,
        totalComentarios:null,
      }
    },
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
            let urlDetallesLibros = "http://localhost:3000/biblioteca/libros/" + this.$route.params.idLibro;
            axios.get(urlDetallesLibros).then(response => {
                this.libro = response.data;
            })
            let urlComentarios = "http://localhost:3000/biblioteca/libros/" + this.$route.params.idLibro + "/comentarios?page=" + 
                this.pagina + "&size=6";
            axios.get(urlComentarios).then(response => {
                this.listaComentarios = response.data;
                this.respuesta = this.listaComentarios.pop();
                this.totalPaginas = Math.ceil(this.respuesta.total_registros/this.respuesta.resultados_pagina);
                this.totalComentarios = this.respuesta.total_registros;
            })
            this.currentTab = null;
            this.activeTabName = null;
        }
    }
}
</script>