const andromedaAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#1e2127',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#1e2127',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#23262e',
            "border-color": '#444444',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#23262e',
        },
    },

    foreground: {
        selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
        properties: {
            color: '#adb2bc',
        }
    },

    error: {
        selector: '.app__error > *',
        properties: {
            color: '#bf241d !important',
        }
    },
};

export default andromedaAppTheme;