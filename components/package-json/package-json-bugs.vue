<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété bugs</h2>
        <v-row>
            <v-col>
                Objet {"ur" : "http//..."}
                <br>
                Lien vers la page des issues du projet
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";

    @Component({
        components: {},
    })
    export default class PackageJsonBugs extends Vue {

    }
</script>

<style>
</style>
