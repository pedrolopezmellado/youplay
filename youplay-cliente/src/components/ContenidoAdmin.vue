<template>
    <div class="container-contenido d-flex">
        <div class="tabs-container">
            <div class="tabs-item" @click="handleTabClick(tabNames.USUARIOS)" :class="{ 'tabs-item-active': activeTabName === tabNames.USUARIOS}">
                USUARIOS
            </div>
            <div class="tabs-item" @click="handleTabClick(tabNames.CATEGORIAS)" :class="{ 'tabs-item-active': activeTabName === tabNames.CATEGORIAS}">
                CATEGORÍAS
            </div>
        </div>
        
        <Component style="width:100%;" :is="currentTab"/>
    </div>
</template>

<script>
import Usuarios from "./Usuarios";
import Categorias from "./Categorias";

const tabNames = {
    USUARIOS: 'usuarios',
    CATEGORIAS: 'categorias'
}

export default {
    data: () => ({
        tabs: {
            [tabNames.USUARIOS]: Usuarios,
            [tabNames.CATEGORIAS]: Categorias
        },
        tabNames,
        currentTab: Usuarios,
        activeTabName: tabNames.USUARIOS,
        drawer: null,
    }),
    components:{
        Usuarios,
        Categorias
    },
    methods: {
        handleTabClick: function(tabName){
            this.activeTabName = tabName;
            this.currentTab = this.tabs[tabName];
        },
        logout(){
            localStorage.removeItem('token');
            this.$store.commit('logout');
            this.$router.push('/');
            this.$router.go();
        }
    }
}
</script>

<style>
.container-contenido{
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.tabs-container{
    display: flex;
    background-color: #2196F3;
    width: 100%;
    height: 50px;
    align-items: center;
}

.tabs-item{
    padding: 17px;
    cursor: pointer;
    font-size: 14px;
    color: white;
}

.tabs-item-active,
.tabs-item:hover{
    background-color: #1565C0;
    color: white;
}
</style>