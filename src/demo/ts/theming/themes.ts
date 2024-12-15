// Theme imports for app + renderes json text 

// Andromeda themes
import andromedaAppTheme from './andromeda.theme';
import andromedaTheme from '../libs/themes/andromeda.theme';

// Dracula themes
import draculaAppTheme from './dracula.theme';
import draculaTheme from '../libs/themes/dracula.theme';

// Daylight themes
import daylightAppTheme from './daylight.theme';
import daylightTheme from '../libs/themes/daylight.theme';

// Horizon themes
import horizonAppTheme from './horizon.theme';
import horizonTheme from '../libs/themes/horizon.theme';

// Github Light themes
import githubLightAppTheme from './githubLight.theme';
import githubLightTheme from '../libs/themes/githubLight.theme';

// Github Dark themes
import githubDarkAppTheme from './githubDark.theme';
import githubDarkTheme from '../libs/themes/githubDark.theme';

// Gruvbox Light themes
import gruvboxLightAppTheme from './gruvboxLight.theme';
import gruvboxLightTheme from '../libs/themes/gruvboxLight.theme';

// Grubbox Dark themes
import gruvboxDarkAppTheme from './gruvboxDark.theme';
import gruvboxDarkTheme from '../libs/themes/gruvboxDark.theme';

// Monokai themes
import monokaiAppTheme from './monokai.theme';
import monokaiTheme from '../libs/themes/monokai.theme';



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