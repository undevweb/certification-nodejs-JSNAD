<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété description</h2>
        <p>
            Utilisé par le registry d'NPM dans les résultats de recherche<br>
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
    export default class PackageJsonDescription extends Vue {

    }
</script>

<style>
</style>
