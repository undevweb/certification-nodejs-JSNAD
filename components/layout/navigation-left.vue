<template>
    <div>
        <v-list dense>
            <v-list-item v-for="(link,i) of links" :key="i + '-link'" link dense >
                <v-list-item-action>
                    <v-icon small>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                        <router-link :to="{ path:'/' + getCurrentMatiere, hash: link.path}" >{{ link.label }}</router-link>
                </v-list-item-content>
            </v-list-item>

        </v-list>
    </div>
</template>


<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import {Getter} from "nuxt-class-component";

    @Component({
        components: {},
    })
    export default class NavigationLeft extends Vue {
        @Getter('currentMatiereLinks') currentMatiereLinks: any;
        @Getter('currentMatiere') currentMatiere: any;
        get links(){
            return this.currentMatiereLinks;
        }

        get getCurrentMatiere(){
            return this.currentMatiere;
        }
    }
</script>
