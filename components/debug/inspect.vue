<template>
    <div id="types" class="chapitre">
        <v-card>
            <v-card-title>Inspect</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-alert border="left" colored-border type="info" elevation="2">
                            Installer la dernière version
                            <pre><code class="language-js">npm install -g node-inspect</code></pre>
                        </v-alert>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        Comme indiqué dans la documentation (
                        <a target="_blank" href="https://nodejs.org/en/docs/guides/debugging-getting-started/">
                            debugging-getting-started
                        </a>
                        )
                        <pre><code class="language-js">node --inspect server.js</code></pre>
                        <pre><code class="language-js">ssh -L 9221:localhost:9229 user@remote.example.com</code></pre>

                        Puis aller dans la console de chrome pour voir l'icone de node s'afficher
                        <br>
                        <img src="/debug/debug-consle-icone-node.png" />
                        <br>
                        On voit dans la fentetre suivante notre fichier apparaitre dans l'onglet profiler
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Prism from "~/plugins/prism";

    @Component({
        components: {},
    })
    export default class Inspect extends Vue {
        mounted() {
            Prism.highlightAll()
        }
    }
</script>

<style>
</style>
