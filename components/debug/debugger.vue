<template>
    <div id="types" class="chapitre">
        <v-card>
            <v-card-title>Debugger</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-alert border="left" colored-border type="info" elevation="2">
                            <ul>
                                <li>La doc officielle : <a href="https://nodejs.org/dist/latest-v12.x/docs/api/debugger.html" target="_blank">https://nodejs.org/dist/latest-v12.x/docs/api/debugger.html</a></li>
                            </ul>
                        </v-alert>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>

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
    export default class Debugger extends Vue {
        mounted() {
            Prism.highlightAll()
        }
    }
</script>

<style>
</style>
