<template>
    <div>
        <header>
            <nav class="nav">
                <div class="logo">YouPlay</div>
                <ul class="menu">
                    <li><a href="/login">Iniciar sesión / Regístrate</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contactos</a></li>
                
                </ul>
                
            </nav>
            <section class="textos-header">
                <h1>Encuentra dónde y con quién <br/> jugar un partido</h1>
            </section>
        </header>
    </div>
</template>

<script>
//import axios from 'axios';
export default {
    name: "Home",
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    computed:{
        
    },
    methods: {
        logout(){
            localStorage.removeItem('token');
            this.$store.commit('logout');
            this.$router.push('/');
            this.$router.go();
        },
        handleScroll () {
            const nav = document.querySelector('.nav');
            nav.classList.toggle('active', window.scrollY >0);
            console.log("A")
            // Any code to be executed when the window is scrolled
        }
    },
    data: () => ({ 
        // user: JSON.parse(localStorage.user),
        drawer: null, 
        listaLibros:null,
        pagina:0,
        repuesta:null,
        totalPaginas:0,
        totalLibros:null,
        tab:null
    }),
    mounted:function(){
        /*
        if (!this.currentUser) {
            console.log("entro en el negativo");
            this.$router.push('/');
        }else{
            
            localStorage.removeItem('token');
            this.$store.commit('logout');
            console.log(this.currentUser);
            this.$router.push('/');
            this.$router.go();
            */
            //axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
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

    body,
    input {
    
    }

    header{
        width: 100%;
        height: 100vh;        
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, hsla(204, 64%, 44%, 0.705), hsla(210, 30%, 24%, 0.719)), url(../assets/peopleFootball3.jpg);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, hsla(204, 64%, 44%, 0.32), hsla(210, 30%, 24%, 0.719)), url(../assets/peopleFootball3.jpg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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



    

    header .textos-header{
        display: flex;
        height: 430px;
        width: 100%;
        padding-left: 240px;
        padding-top: 180px;
    }

    .textos-header{
        font-size: 30px;
        color: white;
    }

    .relleno{
        height: 700px;
    }

</style>