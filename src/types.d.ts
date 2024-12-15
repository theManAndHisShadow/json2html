declare type ErrorHandler = (error: Error) => void;

declare type EventCallbackHandler = (event: Event) => void;

declare type Theme = {
    [key: string]: {                     // HTML element key name, for example: 'spoilerToggle'
        selector: string,                // HTML element selector, for example '.json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed'
        properties: {                    // CSS properties, for example: 'color', 'background',
            [key: string]: string,
        },
    },
};

declare type ThemeLibrary = {
    [key: string]: {
        app: Theme,                     // Theme for whole app (optional)
        renderedJSON: Theme,            // Theme for rendered JSON 
    }
};