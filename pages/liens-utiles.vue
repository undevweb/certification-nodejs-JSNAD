<template>
    <div>
        <h1>Liens utiles</h1>
        <v-divider />
        <ul>
            <li><a href="https://medium.com/fively/how-to-node-js-official-certification-jsnad-c752d343e0af">Medium : How to node js</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";

    @Component({
        components: {Symbole, Types},
    })
    export default class LiensUtiles extends Vue {

    }
</script>

<style>
</style>
