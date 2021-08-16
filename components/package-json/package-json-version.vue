<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété version</h2>
        <p>
            Requise pour publier sur npm<br>
            Standard <a href="https://semver.org/lang/fr/" target="_blank">SemVer</a> (MAJEURE.MINEURE.CORRECTIF)
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
    export default class PackageJsonVersion extends Vue {

    }
</script>

<style>
</style>
