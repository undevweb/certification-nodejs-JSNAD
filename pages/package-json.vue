<template>
    <div>
        <h1>Package.json</h1>
        <v-divider />
        <package-json-definition /><v-divider />
        <package-json-version /><v-divider />
        <package-json-license /><v-divider />
        <package-json-name /><v-divider />
        <package-json-description /><v-divider />
        <package-json-author-contributors /><v-divider />
        <package-json-keywords /><v-divider />
        <package-json-main /><v-divider />
        <package-json-scripts /><v-divider />
        <package-json-repository /><v-divider />
        <package-json-dependencies /><v-divider />
        <package-json-devdependencies /><v-divider />
        <package-json-bugs /><v-divider />
        <npm-vs-yarn /><v-divider />
        <package-json-sources />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Types from "~/components/fondamentaux/types.vue";
    import Symbole from "~/components/fondamentaux/symbole.vue";
    import PackageJsonSources from "~/components/package-json/package-json-sources.vue";
    import PackageJsonDefinition from "~/components/package-json/package-json-definition.vue";
    import PackageJsonName from "~/components/package-json/package-json-name.vue";
    import PackageJsonLicense from "~/components/package-json/package-json-license.vue";
    import PackageJsonAuthorContributors from "~/components/package-json/package-json-author-contributors.vue";
    import PackageJsonDescription from "~/components/package-json/package-json-description.vue";
    import PackageJsonKeywords from "~/components/package-json/package-json-keywords.vue";
    import PackageJsonDependencies from "~/components/package-json/package-json-dependencies.vue";
    import PackageJsonDevdependencies from "~/components/package-json/package-json-devdependencies.vue";
    import PackageJsonBugs from "~/components/package-json/package-json-bugs.vue";
    import PackageJsonRepository from "~/components/package-json/package-json-repository.vue";
    import PackageJsonScripts from "~/components/package-json/package-json-scripts.vue";
    import PackageJsonMain from "~/components/package-json/package-json-main.vue";
    import PackageJsonVersion from "~/components/package-json/package-json-version.vue";
    import NpmVsYarn from "~/components/package-json/npm-vs-yarn.vue";

    @Component({
        components: {
            NpmVsYarn,
            PackageJsonVersion,
            PackageJsonMain,
            PackageJsonScripts,
            PackageJsonRepository,
            PackageJsonBugs,
            PackageJsonDevdependencies,
            PackageJsonDependencies,
            PackageJsonKeywords,
            PackageJsonDescription,
            PackageJsonAuthorContributors,
            PackageJsonLicense, PackageJsonName, PackageJsonDefinition, PackageJsonSources},
    })
    export default class PackageJson extends Vue {

    }
</script>

<style>
</style>
