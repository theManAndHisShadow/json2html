const githubDarkAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#10161d',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#10161d',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#0d1117',
            "border-color": '#30373d',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#0d1117',
        },
    },

    foreground: {
        selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
        properties: {
            color: '#c9d1d9',
        }
    },

    error: {
        selector: '.app__error > *',
        properties: {
            color: '#cd3c3c !important',
        }
    },
};

export default githubDarkAppTheme;