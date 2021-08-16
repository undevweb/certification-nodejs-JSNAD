<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété dependencies</h2>
        <p>
            Liste les dépendances du projet sous forme de { [nom du projet] : [version du projet], ...}<br>
            npm update ce champs quand on installe les dépendances
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
    export default class PackageJsonDependencies extends Vue {

    }
</script>

<style>
</style>
