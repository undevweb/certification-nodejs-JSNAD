<template>
    <div id="app">
        <!--<v-app :style="{background: $vuetify.theme.themes[theme].background}">-->
        <v-app id="inspire">
            <v-navigation-drawer :value="getDrawer" app clipped>
                <navigation-left @drawer="changeDrawer" />
            </v-navigation-drawer>

            <navigation @drawer="changeDrawer"  />
            <v-main>
                <v-system-bar v-if="isAlertRelease" height="30" color="warning" class="text-center pa-2">
                    <v-spacer />
                    <v-icon>mdi-alert</v-icon>
                    {{ msgRelease }}
                    <v-spacer />
                </v-system-bar>
                <div
                    class="
        pl-xs-0 pl-xs-0
        pl-sm-0 pl-sm-0
        pl-md-0 pl-md-0
        pl-lg-5 pl-lg-5
        pl-xl-5 pl-xl-5
        "
                >
                    <nuxt />
                </div>
            </v-main>

            <v-footer app color="dark" class="white--text text-center">
                <v-row>
                    <v-col class="pa-0 font-italic">
                        <a class="white--text" href="https://github.com/undevweb/certification-nodejs-JSNAD" target="_blank">
                            <v-icon class="white--text">mdi-github</v-icon>
                            Repo Github
                        </a>
                    </v-col>
                </v-row>
            </v-footer>
        </v-app>
    </div>
</template>

<script lang="ts">
    import SpToggle from "../components/generic/SpToggle.vue";
    import {Vue} from "vue-property-decorator";
    import Component from "vue-class-component";
    import NavigationLeft from "~/components/layout/navigation-left.vue";
    import Navigation from "~/components/layout/Navigation.vue";
    import {Getter, Mutation} from "nuxt-class-component";

    @Component
    ({
        components: {
            Navigation,
            NavigationLeft,
            SpToggle

        }
    })
    export default class Default extends Vue {
        @Getter('getDrawer') getDrawer: any;
        @Mutation('setDrawer') setDrawer : any;
        head() {
            return {
                bodyAttrs: {
                    class: this.scrollbarTheme
                }
            }
        }

        changeDrawer(){
            this.setDrawer(!this.getDrawer);
        }

        get isAlertRelease() {
            return process.env.WEBSITE_IS_ALERT_RELEASE === 'true';
        }

        get msgRelease() {
            return process.env.WEBSITE_IS_ALERT_RELEASE_MSG;
        }

        get scrollbarTheme() {
            return this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light';
        }

        get theme() {
            return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        }

    }
</script>
<style>
    html {
        overflow-y: auto !important;
    }
</style>
