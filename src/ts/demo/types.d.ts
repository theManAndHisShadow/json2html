declare type ThemeLibrary = {
    [key: string]: {
        app: Theme,                     // Theme for whole app (optional)
        renderedJSON: Theme,            // Theme for rendered JSON 
    }
};