<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété main</h2>
        <v-row>
            <v-col>
                Objet {"name" : "command"}
                <br>
                Pratique pour réutiliser régulièrement des commandes rapidement
                <br>
                <pre><code class="language-shell">npm run < script-name ></code></pre>
                <pre><code class="language-shell">yarn < script-name ></code></pre>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";

    @Component({
        components: {},
    })
    export default class PackageJsonScripts extends Vue {

    }
</script>

<style>
</style>
