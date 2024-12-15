const daylightAppTheme = {
    background: {
        selector: '#app',
        properties: {
            background: '#e7e7e7',
        },
    },

    logoInner: {
        selector: '#app__logo span:nth-child(3)',
        properties: {
            color: '#e7e7e7',
        },
    },

    tiles: {
        selector:'#app__input, #app__output, #app__controls select',
        properties: {
            background: '#ffffff',
            "border-color": '#b6b6b6',
        },
    },

    textarea: {
        selector:'#app__input textarea',
        properties: {
            background: '#ffffff',
        },
    },

    foreground: {
        selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
        properties: {
            color: '#000000',
        }
    },

    error: {
        selector: '.app__error > *',
        properties: {
            color: '#bf0404 !important',
        }
    },
};

export default daylightAppTheme;