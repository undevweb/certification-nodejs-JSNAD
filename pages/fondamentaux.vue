<template>
    <div>
        <h1>Fondamentaux</h1>
        <v-divider />
        <types />
        <v-divider />
        <symbole />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";

    @Component({
        components: {Symbole, Types},
    })
    export default class Fondamentaux extends Vue {

    }
</script>

<style>
</style>
