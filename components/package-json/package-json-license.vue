<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété license</h2>
        <p>
            Identifiant court de la licence exemple : <code>"license" : "ISC"</code>
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
    export default class PackageJsonLicense extends Vue {

    }
</script>

<style>
</style>
