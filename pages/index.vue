<template>

    <v-container class="pa-2">
        <v-row>
            <v-col>
                <h1>Matières à connaitre pour passer la certification JSNAD</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(matiere,index) of matieres" :key="'matiere-'+index" cols="4">
                <v-card :disabled="!matiere.enabled" @click="selectMatiere(matiere)">
                    <v-card-title :class="{'justify-center':true, 'selectable' : matiere.enabled}">
                        {{ matiere.title }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";
    import {Mutation} from "nuxt-class-component";

    @Component({
        components: {}
    })
    export default class Index extends Vue {
        @Mutation('setDrawer') setDrawer : any;
        @Mutation('setCurrentMatiere') setCurrentMatiere : any;

        matieres = [
            {title: 'Javascript fondamentaux', enabled: true,route:'/fondamentaux', name:'fondamentaux'},
            {title: 'Package.json', enabled: true,route:'/package-json', name:'package-json'},
            {title: 'Debugging',enabled: true,route:'/debug', name:'debug'},
            {title: 'Error handling'},
            {title: 'Control flow'},
            {title: 'Child Process'},
            {title: 'Events'},
            {title: 'Process Operating System'},
            {title: 'Buffer & Streams'},
            {title: 'File system'},
            {title: 'Unit Tests'},
            {title: 'Node js Cli'},
        ];

        selectMatiere(matiere:{name:string,route:string}){
            this.setCurrentMatiere(matiere.name);
            this.setDrawer(true);
            this.$router.push(matiere.route);
        }
    }
</script>
