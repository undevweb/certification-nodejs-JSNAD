<template>

    <v-container class="pa-2">
        <v-row>
            <v-col>
                <h1>Bienvenue sur le site... !</h1>
            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class Index extends Vue {
    }
</script>
