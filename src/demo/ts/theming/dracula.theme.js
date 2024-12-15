const draculaAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#21232c',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#21232c',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#282a36',
            "border-color": '#424242',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#282a36',
        },
    },

    foreground: {
        selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
        properties: {
            color: '#ffffff',
        }
    },

    error: {
        selector: '.app__error > *',
        properties: {
            color: '#ee5d44 !important',
        }
    },
};

export default draculaAppTheme;