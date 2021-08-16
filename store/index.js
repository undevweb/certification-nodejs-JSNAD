export const state = () => ({})

export default {
    plugins: [],
    state: () => ({
        drawer : false,
        currentMatiere : null,
        linksByMatiere: {
            'fondamentaux' :[
                {path: '#types', label: 'Types de base', icon:'mdi-face-profile'},
                {path: '#symbole', label: 'Symbole', icon:'mdi-account-star'},
            ],
            'package-json' :[
            ]
        }
    }),
    getters: {
        getDrawer : state => state.drawer,
        currentMatiereLinks : state => state.linksByMatiere[state.currentMatiere || localStorage.getItem("matiere")] || [],
        currentMatiere : state => state.currentMatiere || localStorage.getItem("matiere")
    },
    mutations: {
        setCurrentMatiere(state, matiere) {
            localStorage.setItem("matiere", matiere);
            state.currentMatiere = matiere;
        },
        setDrawer(state, drawer) {
            state.drawer = drawer;
        }
    },
    actions: {}
};
