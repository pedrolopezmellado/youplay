<template>
  <div id="categorias">
    <div style="position:absolute; padding-left:40px; padding-top:40px; ">
      <a :href="$router.resolve({name:'Contenido'}).href" style="text-decoration: none;">
        <v-btn right color="pink" dark>Atrás</v-btn>
      </a>
    </div>
    <h1 class="text-center mt-3" style = "padding-top: 25px;" >Categorías</h1>    
    <div style="padding-top: 25px;" >
    <v-row no-gutters>
            <v-col v-for="categoria in listaCategorias" :key="categoria.idcategoria" cols="8" sm="12">
                <a :href="$router.resolve({name:'LibrosCategoria', params: {idCategoria:categoria.idcategoria}}).href" style="text-decoration: none;">
                <v-card class="pa-2" outlined tile>
                            <br/>
                            <h4 class="text-center mt-3" >{{categoria.nombre}}</h4>
                        <br/>
                </v-card>
                </a>
            </v-col>
    </v-row>
    </div>





  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Categorias',
  computed:{
    currentUser() {
      return this.$store.state.user;
    }
  },
  data: () => ({ 
    // user: JSON.parse(localStorage.user), 
    listaCategorias:null,
  }),
  mounted:function(){
    if (!this.currentUser) {
      this.$router.push('/');
    }else{
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
      let urlListarCategorias = "http://localhost:3000/biblioteca/categorias";
      axios.get(urlListarCategorias).then(response => {
          this.listaCategorias = response.data;
      })
    }
  },
}
</script>