const userTheme = {
    // Defines the background and overall styling of the main container that wraps the rendered JSON structure
    container: {
        selector: '.json2html-container',
        properties: {
            background: "", // set with custom value
        },
    },

    // Styles the toggle buttons used to collapse or expand nested structures in the JSON
    spoilerToggle: {
        selector: '.json2html - spoiler - toggle--collapsed, .json2html - spoiler - toggle--uncollapsed',
        properties: {
            color: "", // set with custom value
        },
    },

    // Defines the text color for JSON keys
    key: {
        selector: '.json2html-key',
        properties: {
            color: "", // set with custom value
        },
    },

    // Specifies the styling for boolean values (e.g., true, false) in the rendered JSON
    valueTypeBoolean: {
        selector: '.json2html-type__boolean',
        properties: {
            color: "", // set with custom value
        },
    },

    // Styles the minus sign (-) for negative numbers in the JSON.
    valueMinusSign: {
        selector: '.json2html-value__minus-sign',
        properties: {
            color: "", // set with custom value
        },
    },

    // Defines the text color for numeric values
    valueTypeNumber: {
        selector: '.json2html-type__number',
        properties: {
            color: "", // set with custom value
        },
    },

    // Specifies the styling for string values in the JSON
    valueTypeString: {
        selector: '.json2html-type__string',
        properties: {
            color: "", // set with custom value
        },
    },

    // Styles links (URLs) when they appear as string values
    valueTypeStringLink: {
        selector: '.json2html-type__string a, .json2html-type__string a:visited',
        properties: {
            color: "", // set with custom value
        },
    },

    // Styles the null type values
    valueTypeNull: {
        selector: '.json2html-type__null',
        properties: {
            color: "", // set with custom value
        },
    },

    // Defines the text color for undefined values
    valueTypeUndefined: {
        selector: '.json2html-type__undefined',
        properties: {
            color: "", // set with custom value
        },
    },

    // Styles the type signatures for arrays ([]) and objects ({})
    valueComplexItemSignature: {
        selector: '.json2html-type__array, .json2html-type__object',
        properties: {
            color: "", // set with custom value
        },
    },

    // Styles the button or element used to collapse all sections of the JSON structure
    collapseAllToggle: {
        selector: '.json2html-collapse-all-toggle',
        properties: {
            color: "", // set with custom value
        },
    },
};

export default userTheme;