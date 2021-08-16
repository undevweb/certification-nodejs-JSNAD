<template>
    <div id="package-json-sources" class="chapitre">
        <h2>Propriété devDependencies</h2>
        <v-row>
            <v-col>
                Similaire à dependencies (même format)
                <br>
                Liste les dépendances utile uniquement en dév
                <br>
                <pre><code class="language-shell">npm install</code></pre>
                Installe toutes les dépendances (dependencies + devDependencies)
                <pre><code class="language-shell">npm install -- production</code></pre>
                Installe les dépendances sans les paquets listés dans devDependencies
                <pre><code class="language-shell">npm install --save-dev < package ></code></pre>
                <pre><code class="language-shell">npm install < package > -D</code></pre>
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
    export default class PackageJsonDevdependencies extends Vue {

    }
</script>

<style>
</style>
