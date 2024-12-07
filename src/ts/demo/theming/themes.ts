// Theme imports for app + renderes json text 

// Andromeda themes
import andromedaAppTheme from './andromeda.theme.js';
import andromedaTheme from '../../lib/theming/themes/andromeda.theme';

// Dracula themes
import draculaAppTheme from './dracula.theme.js';
import draculaTheme from '../../lib/theming/themes/dracula.theme';

// Daylight themes
import daylightAppTheme from './daylight.theme.js';
import daylightTheme from '../../lib/theming/themes/daylight.theme';

// Horizon themes
import horizonAppTheme from './horizon.theme.js';
import horizonTheme from '../../lib/theming/themes/horizon.theme';

// Github Light themes
import githubLightAppTheme from './githubLight.theme.js';
import githubLightTheme from '../../lib/theming/themes/githubLight.theme';

// Github Dark themes
import githubDarkAppTheme from './githubDark.theme.js';
import githubDarkTheme from '../../lib/theming/themes/githubDark.theme';

// Gruvbox Light themes
import gruvboxLightAppTheme from './gruvboxLight.theme.js';
import gruvboxLightTheme from '../../lib/theming/themes/gruvboxLight.theme';

// Grubbox Dark themes
import gruvboxDarkAppTheme from './gruvboxDark.theme.js';
import gruvboxDarkTheme from '../../lib/theming/themes/gruvboxDark.theme';

// Monokai themes
import monokaiAppTheme from './monokai.theme.js';
import monokaiTheme from '../../lib/theming/themes/monokai.theme';



/**
 * Returns full App theme css properties object.
 * @param themeName name of theme
 * @returns CSS props object {selector: string, props: {cssProp:value}}
 */
export default function getFullTheme(themeName: string){
    const themes: ThemeLibrary = {
        andromeda:          { app: andromedaAppTheme,    renderedJSON: andromedaTheme   },
        dracula:            { app: draculaAppTheme,      renderedJSON: draculaTheme     },
        monokai:            { app: monokaiAppTheme,      renderedJSON: monokaiTheme     },
        daylight:           { app: daylightAppTheme,     renderedJSON: daylightTheme    },
        horizon:            { app: horizonAppTheme,      renderedJSON: horizonTheme     },
        "github-light":     { app: githubLightAppTheme,  renderedJSON: githubLightTheme },
        "github-dark":      { app: githubDarkAppTheme,   renderedJSON: githubDarkTheme  },
        "gruvbox-dark":     { app: gruvboxDarkAppTheme,  renderedJSON: gruvboxDarkTheme },
        "gruvbox-light":    { app: gruvboxLightAppTheme, renderedJSON: gruvboxLightTheme},
    }
    
    const fullTheme = { 
        ...themes[themeName].app, 
        ...themes[themeName].renderedJSON 
    };

    return fullTheme;
}