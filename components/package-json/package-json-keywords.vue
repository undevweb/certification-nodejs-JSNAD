<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété keywords</h2>
        <p>
            array de string<br>
            indexé par npm
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
    export default class PackageJsonKeywords extends Vue {

    }
</script>

<style>
</style>
