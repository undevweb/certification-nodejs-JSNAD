<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété repository</h2>
        <p>
            Emplacement de la version en cours du projet
            <br>
            Définit le type de versionning utilisé
            <br>
            Format : objet {"type":"git","url":"https://github.com/..."}
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
    export default class PackageJsonRepository extends Vue {

    }
</script>

<style>
</style>
