const gruvboxLightAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#e1d8b2',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#e1d8b2',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#FBF1C7',
            "border-color": '#b7a5a0',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#FBF1C7',
        },
    },

    foreground: {
        selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
        properties: {
            color: '#7c6f64',
        }
    },

    error: {
        selector: '.app__error > *',
        properties: {
            color: '#bf241d !important',
        }
    },
};

export default gruvboxLightAppTheme;