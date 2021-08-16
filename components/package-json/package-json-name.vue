<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété name</h2>
        <p>
        C'est le nom du package<br>
        Il doit être unique pour être publié<br>
        Il doit être en <b>minuscule</b>, faire moins de <b>214 charactères</b>, <b>pa d'espace</b>, <b>url safe</b>
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
    export default class PackageJsonName extends Vue {

    }
</script>

<style>
</style>
