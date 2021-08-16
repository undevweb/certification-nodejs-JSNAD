<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété author and contributors</h2>
        <p>
            Format : Name < email > < url > ou des objets avec les clefs name, email, url ({"email" :"", ...})<br>
            author => 1 seul personne<br>
            contributors => array de personnes
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
    export default class PackageJsonAuthorContributors extends Vue {

    }
</script>

<style>
</style>
