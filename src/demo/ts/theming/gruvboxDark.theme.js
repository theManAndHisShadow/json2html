const gruvboxDarkAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#242424',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#242424',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#282828',
            "border-color": '#3f3f3f',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#282828',
        },
    },

    foreground: {
        selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
        properties: {
            color: '#A89984',
        }
    },

    error: {
        selector: '.app__error > *',
        properties: {
            color: '#bf241d !important',
        }
    },
};

export default gruvboxDarkAppTheme;