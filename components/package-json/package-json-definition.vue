<template>
    <div id="package-json-definition" class="chapitre">
        <v-alert border="left" colored-border type="info" elevation="2"        >
            Le fichier package.json est fichier à la racine du projet qui permet de connaitre une multitudes d'informations sur le projet.<br>
            Il permet de gérer les dépendances du projet et leurs versions.<br>
            Il permet aussi de déclarer des script exécutables.<br><br>
            2 champs sont obligatoire <b>name</b> et <b>version</b><br>
            <b>Doit être un JSON valide</b><br>
            <pre><code class="js">npm init</code></pre><br>
        </v-alert>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";

    @Component({
        components: {},
    })
    export default class PackageJsonDefinition extends Vue {

    }
</script>

<style>
</style>
