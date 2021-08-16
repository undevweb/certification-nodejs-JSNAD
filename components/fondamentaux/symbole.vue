<template>
    <div class="chapitre">
        <h2 id="symbole">Symbole</h2>
        <v-row>
            <v-col>
                Le type Symbole permet de créer une donnée unique et immuable.
                C'est comme si la variable était une valeur elle même
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
<pre><code class="language-js">    const monType = Symbol('ok');
    console.log(monType === 'ok'); // false
    console.log(monType ===  Symbol('ok')); // false

    const maPropritéVariable = "haha";
    const monObjet = {
    monType : 'non',
    [monType] : 'oui',
    maPropritéVariable : 'une valeur',
    [maPropritéVariable] : 'une autre valeur'
    }

    console.log(monObjet.monType); // non
    console.log(monObjet['monType']); // non
    console.log(monObjet[monType]);// oui
    console.log(monObjet[Symbol('ok')]);// undefined
    console.log(monObjet.maPropritéVariable);// une valeur
    console.log(monObjet['haha']);// une autre valeur
    console.log(monObjet);</code></pre>
            </v-col>
            <v-col cols="6">
                Ce code affichera
<pre><code class="language-js">false
false
non
non
oui
undefined
une valeur
une autre valeur
{monType: "non", maPropritéVariable: "une valeur", haha: "une autre valeur", Symbol(ok): "oui"}
undefined
</code></pre>
            </v-col>
        </v-row>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import Prism from '~/plugins/prism'

    @Component({
        components: {},
    })
    export default class Symbole extends Vue {
        mounted() {
            Prism.highlightAll()
        }
    }
</script>

<style>
</style>
