<template>
    <div>
        <header v-if="futbol" id="myHeader">
            <div class="navbar">
                <div class="logo"><a href="#">YouPlay</a></div>
                <div class="links">
                    <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                    <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                    <a v-on:click="cambiarDeporte('tenis')" class="movement">Tenis</a>
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
                        <a v-on:click="cerrarSesion()" class="movement">Cerrar sesión</a>
                    </li>
                    <li>
                        <a v-on:click="" class="movement"></a>
                    </li>
                </ul>
            </div>

            <section class="textos-header">
                <h1>El talento depende de la <br/> la inspiración pero el esfuerzo<br/> depende de cada uno.</h1>
                <h2>- Pep Guardiola -</h2>

            </section>
        </header>
        <header v-if="baloncesto" id="myHeader2">
            <div class="navbar">
                <div class="logo"><a href="#">YouPlay</a></div>
                <div class="links">
                    <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                    <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                    <a v-on:click="cambiarDeporte('tenis')" class="movement">Tenis</a>
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
                        <a v-on:click="cerrarSesion()" class="movement">Cerrar sesión</a>
                    </li>
                    <li>
                        <a v-on:click="" class="movement"></a>
                    </li>
                </ul>
            </div>

            <section class="textos-header">
                <h1>Algunas personas <br/> quieren que algo ocurra, <br/> otras hacen que suceda.</h1>
                <h2>- Michael Jordan -</h2>

            </section>
        </header>
        <header v-if="tenis" id="myHeader3">
            <div class="navbar">
                <div class="logo"><a href="#">YouPlay</a></div>
                <div class="links">
                    <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                    <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                    <a v-on:click="cambiarDeporte('tenis')" class="movement">Tenis</a>
                    <a v-on:click="cambiarDeporte('pádel')" class="movement">Pádel</a>
                    
                </div>
                <ul class="links">
                    <li>
                        <a v-on:click="misPartidos()" class="movement">Mis partidos</a>
                    </li>
                    <li>
                        <a v-on:click="cerrarSesion()" class="movement">Cerrar sesión</a>
                    </li>
                    <li>
                        <a v-on:click="" class="movement"></a>
                    </li>
                    <li>
                        <a v-on:click="" class="movement"></a>
                    </li>
                </ul>
            </div>

            <section class="textos-header">
                <h1>El éxito no es ganar sino <br/> saber que lo has dado todo.</h1>
                <h2>- Rafael Nadal -</h2>

            </section>
        </header>
        <header v-if="padel" id="myHeader4">
            <div class="navbar">
                <div class="logo"><a href="#">YouPlay</a></div>
                <div class="links">
                    <a v-on:click="cambiarDeporte('fútbol')" class="movement">Fútbol</a>
                    <a v-on:click="cambiarDeporte('baloncesto')" class="movement">Baloncesto</a>
                    <a v-on:click="cambiarDeporte('tenis')" class="movement">Tenis</a>
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
                        <a v-on:click="cerrarSesion()" class="movement">Cerrar sesión</a>
                    </li>
                    <li>
                        <a v-on:click="" class="movement"></a>
                    </li>
                </ul>
            </div>

            <section class="textos-header">
                <h1>Me levanto cada mañana <br/> con un único pensamiento,<br/> ser el mejor.</h1>
                <h2>- Paquito Navarro -</h2>

            </section>
        </header>
        
    </div>
</template>

<script>

import axios from 'axios';
import { Icon } from '@iconify/vue2';



export default {
    name: "Home",
    data:() => ({ 
        //user: JSON.parse(localStorage.user),   
        url: "../assets/imagenBaloncesto.jpg",
        ejemplo: "linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/imagenBaloncesto.jpg)",
        drawer: null, 
        listaLibros:null,
        pagina:0,
        repuesta:null,
        totalPaginas:0,
        totalLibros:null,
        tab:null,
        deporteSeleccionado:null,
        deportes:[
            { id: '1', nombre: 'fútbol'},
            { id: '2', nombre: 'baloncesto'},
            { id: '3', nombre: 'tenis'},
            { id: '4', nombre: 'pádel'}
        ],
        futbol: false,
        baloncesto: false,
        tenis: false,
        padel: false,
        deporte: null,
        locations: ['top', 'bottom', 'start', 'end', 'center'],
        location: 'end',
        
    }),
    computed:{
        currentUser() {
            console.log(this.$store.state.user);       
            return this.$store.state.user;
        },
        currentSport() {
            return this.$store.state.deporte;
        }
    },
    methods: {
        openDropdown: function(event){
            const optionMenu = document.querySelector(".dropdown-menu");
            optionMenu.classList.toggle("active");
            console.log("ahora esto");
        },
        selectSport: function(sport){
            const optionMenu = document.querySelector(".dropdown-menu");
            const sBtn_text = optionMenu.querySelector(".dropdown-btn");
            sBtn_text.innerText = sport;
            console.log("hola");
        },
        logout(){
            localStorage.removeItem('token');
            this.$store.commit('logout');
            this.$router.push('/');
            this.$router.go();
        },
        crearPartido(){
            this.$store.commit('saveSport', this.deporteSelected); 
            this.$router.push('/equipos/crear');
        },
        crearTorneo(){
            this.$router.push('/torneos/crear');
        },
        anteriorDeporte(){
            var salir = false
            var section = document.getElementById('section_' + this.deporteSelected);
            section.style.display = "none"
            console.log("deporte actual: " + this.deporteSelected);
            for(var i = 0; i<this.deportes.length && !salir;i++){
                if(this.deportes[i] == this.deporteSelected){
                    console.log("entroooo")
                    if(this.deportes[i - 1] != undefined){
                        this.deporteSelected = this.deportes[i - 1];
                    } else {
                        this.deporteSelected = this.deportes[this.deportes.length - 1];
                    }
                    salir = true;
                }
            }
            section = document.getElementById('section_' + this.deporteSelected);
            section.style.display = ""
            var label = document.getElementById('labelDeporte');
            label.innerText = "Deporte: " + this.deporteSelected;
            console.log("deporte actualizado: " + this.deporteSelected);
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


        },
        misEquipos(){
            let usuarioId = this.usuarioId;
            this.$router.push({ name: 'MisEquipos', params: {usuarioId}});
        },
        misPartidos(){
            let usuarioId = this.usuarioId;
            this.$router.push({ name: 'MisPartidos', params: {usuarioId}});
        },
        cerrarSesion(){
            this.$store.commit('logout');      
            this.$router.push('/');
        }
    },
    mounted:function(){
        if (!this.currentUser) {
            this.$router.push('/');
        }else{

            if(this.currentSport != null){
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
            } else {
                this.futbol = true;
                this.deporteSeleccionado = "fútbol";
                this.$store.commit('saveSport', this.deporteSeleccionado);
            }

            this.usuarioId = this.currentUser.id;
            this.deportes = [
                { id: '1', nombre: 'fútbol'},
                { id: '2', nombre: 'baloncesto'},
                { id: '3', nombre: 'tenis'},
                { id: '4', nombre: 'pádel'}
            ]
            console.log("Los deportes son: " + this.deportes);
            /*
            localStorage.removeItem('token');
            this.$store.commit('logout');
            console.log(this.currentUser);
            this.$router.push('/');
            this.$router.go();
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
            let urlListarDeportes = "http://localhost:3000/youplay/deportes";
            axios.get(urlListarDeportes).then(response => {
                this.deportes = response.data;
                console.log("*** LOS DEPORTES SON: " + this.deportes);
                /*this.deporteSelected = this.deportes[0];
                for(var i = 0; i<this.deportes.length;i++){
                    var section = document.getElementById('section_' + this.deportes[i]);
                    if(this.deporteSelected == this.deportes[i]){
                        console.log("Entro en el selected");
                        section.style.display= ""
                    }
                }*/




               /* var label = document.getElementById('labelDeporte');
                //this.deportes.toString().split(",")
                console.log("mis deportes: " + this.deportes);
                console.log("deporte actual: " + this.deportes[0]);
                this.respuesta = this.listaLibros.pop();*/
            //}) 
        }
    },
    handlePageChange(value) {
      this.pagina = value;
      this.next();
    },
  }
</script>



<style scoped>
    *{
        margin:0;
        padding:0;
        font-family: "Poppins", sans-serif;
    }

    li {
        list-style: none;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.5s ease;
    }

    a:hover {
        
        //padding: 5px 5px;
        //background: #fff;
        color: #000;
        //border-radius: 15px;
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

    .dropdown-menu{
        width: 380px;
        margin:  auto;
    }

    .dropdown-menu .dropdown-btn{
        display: flex;
        height: 55px;
        padding: 20px;
        align-items: center;
        cursor: pointer;
        background: #fff;
        border-radius: 8px;
        justify-content: space-between;
    }

    .dropdown-menu .options{
        position: relative;
        padding: 20px;
        margin-top: 10px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 0 3px rgba(0,0,0,0.1);
        display:none;
    }

    .dropdown-menu.active .options{
        display: block;
    }


    .options .option{
        display: flex;
        height: 55px;
        cursor: pointer;
        padding: 0 16px;
        border-radius: 8px;
        align-items: center;
        background: #fff;
    }

    .options .option:hover{
        background: #F2F2F2;
    }

    .option i{
        font-size: 25px;
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

    .dropdown{
        position: center;
    }



    body,
    input {
    
    }

    header{
        
    }

    #myHeader{
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

    /*.select-menu .select-btn{
        display: flex;
        height: 55px;
        background: #fff;
        padding: 20px;
        font-size: 18px;
         
    }*/

    

</style>