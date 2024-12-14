const monokaiAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#22231e',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#22231e',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#272822',
            "border-color": '#424242',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#272822',
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
            color: '#bf0404 !important',
        }
    },
};

export default monokaiAppTheme;