<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété main</h2>
        <p>
            Quand notre projet est installé en dépendance d'un autre projet, <br>
            au moment du require < myproject > dans l'autre projet cela va exécuter ce qu'il y a dans cette propriété. (point d'entrée du module) <br>
            Exemple : "main" : "src/index.js"<br>
            Par défaut : "index.js" à la racine du projet
        </p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";

    @Component({
        components: {},
    })
    export default class PackageJsonMain extends Vue {

    }
</script>

<style>
</style>
