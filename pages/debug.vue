<template>
    <v-container>
        <h1>Debug</h1>
        https://github.com/othiym23/bug-clinic/find/master
        <v-divider />
        <inspect />
        <v-divider />
        <console />
        <v-divider />
        <debugger />
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Inspect from "~/components/debug/inspect.vue";
    import Console from "~/components/debug/console.vue";
    import Debugger from "~/components/debug/debugger.vue";

    @Component({
        components: {Debugger, Console, Inspect},
    })
    export default class Debug extends Vue {

    }
</script>

<style>
</style>
