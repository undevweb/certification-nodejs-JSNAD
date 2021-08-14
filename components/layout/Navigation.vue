<template>
    <v-app-bar app clipped-left dense :color="colorTheme">
        <v-app-bar-nav-icon color="white" @click.stop="$emit('drawer')"></v-app-bar-nav-icon>
        <v-spacer />
        <v-toolbar-title class="website-title cursor-pointer" @click="$router.push('/')">
            Réviser la certification JSNAD
        </v-toolbar-title>

    </v-app-bar>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import SpToggle from "~/components/generic/SpToggle.vue";

    @Component({
        components: {SpToggle}
    })
    export default class Navigation extends Vue {

        $vuetify: any;
        light: boolean = true;

        get colorTheme() {
            return this.$vuetify.theme.themes.light.primary;
        }

        logout() {
            this.$router.push('/');
        }

        async mounted() {
            this.changeLight();
        }

        changeLight() {
            this.$vuetify.theme.dark = !this.light;
        }
    }
</script>
<style scoped>

</style>
