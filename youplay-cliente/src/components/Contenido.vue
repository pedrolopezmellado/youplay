<template>
    <div class="container-contenido d-flex">
        <div class="tabs-container">
            <div class="tabs-item" @click="handleTabClick(tabNames.HOME)" :class="{ 'tabs-item-active': activeTabName === tabNames.HOME}">
                HOME
            </div>
            <div class="tabs-item" @click="handleTabClick(tabNames.CATEGORIAS)" :class="{ 'tabs-item-active': activeTabName === tabNames.CATEGORIAS}">
                CATEGORÍAS
            </div>
        </div>
        <Component style="width:100%;" :is="currentTab"/>
    </div>
</template>

<script>
import Home from "./Home";
import Categorias from "./Categorias";

const tabNames = {
    HOME: 'home',
    CATEGORIAS: 'categorias'
}

export default {
    data: () => ({
        tabs: {
            [tabNames.HOME]: Home,
            [tabNames.CATEGORIAS]: Categorias
        },
        tabNames,
        currentTab: Home,
        activeTabName: tabNames.HOME,
    }),
    components:{
        Home,
        Categorias
    },
    methods: {
        handleTabClick: function(tabName){
            this.activeTabName = tabName;
            this.currentTab = this.tabs[tabName];
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