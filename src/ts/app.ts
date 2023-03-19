import { ThemesLibrary, generateCSSCode, updateThemeCSS} from './lib/themes';
import { json2html } from './lib/json2html';
import { importDataset } from './lib/datasets';



/**
 * Returns App theme css properties object.
 * @param themeName name of theme
 * @returns CSS props object {selector: string, props: {cssProp:value}}
 */
function getAppThemeProperies(themeName: string){
    const themes:ThemesLibrary= {
        dracula: {
            background: {
                selector: '#app',
                properties: {
                    background: '#21232c',
                },
            },

            logoInner: {
                selector: '#app__logo span:nth-child(3)',
                properties: {
                    color: '#21232c',
                },
            },
    
            tiles: {
                selector:'#app__input, #app__output, #app__controls select',
                properties: {
                    background: '#282a36',
                    "border-color": '#424242',
                },
            },

            textarea: {
                selector:'#app__input textarea',
                properties: {
                    background: '#282a36',
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
                    color: '#ee5d44 !important',
                }
            },
        },



        monokai: {
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
        },
    


        daylight: {
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
        },



        horizon: {
            background: {
                selector: '#app',
                properties: {
                    background: '#ded5cc',
                },
            },

            logoInner: {
                selector: '#app__logo span:nth-child(3)',
                properties: {
                    color: '#ded5cc',
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
                    color: '#2f2f2f',
                }
            },

            error: {
                selector: '.app__error > *',
                properties: {
                    color: '#bf0404 !important',
                }
            },
        },



        "github-light": {
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
                    "border-color": '#cacdd1',
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
                    color: '#25292f',
                }
            },

            error: {
                selector: '.app__error > *',
                properties: {
                    color: '#bf0404 !important',
                }
            },
        },



        "github-dark": {
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
        },



        "gruvbox-dark": {
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
        },

    

        "gruvbox-light": {
            background: {
                selector: '#app',
                properties: {
                    background: '#e1d8b2',
                },
            },

            logoInner: {
                selector: '#app__logo span:nth-child(3)',
                properties: {
                    color: '#e1d8b2',
                },
            },
    
            tiles: {
                selector:'#app__input, #app__output, #app__controls select',
                properties: {
                    background: '#FBF1C7',
                    "border-color": '#b7a5a0',
                },
            },

            textarea: {
                selector:'#app__input textarea',
                properties: {
                    background: '#FBF1C7',
                },
            },
    
            foreground: {
                selector: '#app__controls, #app__controls select, #app__input, #app__input textarea, #app__logo span:nth-child(1), #app__logo span:nth-child(2)',
                properties: {
                    color: '#7c6f64',
                }
            },

            error: {
                selector: '.app__error > *',
                properties: {
                    color: '#bf241d !important',
                }
            },
        },



        "andromeda": {
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
        },
    }

    return themes[themeName];
}



/**
 * Returns current seleted by user app theme name.
 * @returns theme name
 */
function getSelectedThemeName(){
    const themeSelector:HTMLSelectElement = document.querySelector('#controls__theme-selector') as HTMLSelectElement;

    return themeSelector.value;
}



/**
 * Returns current seleted by user dataset name.
 * @returns dataset name
 */
function getSelectedDatasetName(){
    const datasetSelector:HTMLSelectElement = document.querySelector('#controls__data-set-selector') as HTMLSelectElement;

    return datasetSelector.value;
}



/**
 * Updates app colors using theme name.
 * @param themeName 
 */
function updateAppTheme(themeName: string){
    const themeColors = getAppThemeProperies(themeName);
    const cssCode = generateCSSCode(themeColors);

    updateThemeCSS(cssCode, '[data-style-origin="demo-app"]');
}



/**
 * Show or hide error message container.
 * @param state visibility of errror message container
 * @param message error message
 */
function toggleErrorMessage(state: boolean, message?: string){
    const appInput: HTMLDivElement = document.querySelector('#app__input');
    const errorMessageConainer:HTMLDivElement = document.querySelector('#app__error-message');

    if(state === true) {
        const errorMessage = `[Error! ${message}]:`;
        const themeName = getSelectedThemeName();

        appInput.classList.add('app__error');
        errorMessageConainer.textContent = errorMessage;
        errorMessageConainer.style.display = 'initial';
    } else {
        appInput.classList.remove('app__error');
        errorMessageConainer.style.display = 'none';
    }
}



/**
 * Updates output container inner content.
 * @param newOutput 
 */
function updateOutput(newOutput: HTMLDivElement){
    const output = document.querySelector('#app__output');

    output.children.length == 0 
        ? output.appendChild(newOutput) 
        : output.replaceChild(newOutput, output.firstElementChild);
}



/**
 * Renders text as parsed and formatted JSON.
 * @param text 
 */
function renderText(text: string){
    const themeName = getSelectedThemeName();

    const formatted = json2html({
        json: text,
        showTypeOnHover: true,
        theme: themeName,
        // on error show error message
        onError: error => {
            toggleErrorMessage(true, error.message);
        },
    });

    // bug fix
    // update theme in any cases (also with JSON errors)
    updateAppTheme(themeName);

    // if variable 'formatted' returned from json2html function
    // it means that code executed wuthout error
    if(formatted) {
        // then hide error message
        toggleErrorMessage(false);

        updateOutput(formatted);
    }
}



// main function
function init(){
    const defaultJSONString = `{
    "string":"Hello world!", "paragraph":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?", "link":"https://www.freedesktop.org/wiki/","number":42, "negativeNumber": -1,"floatNumber":3.1415926535,"boolean":true, "isNull": null, "isUndefined": "undefined", "emptyArray": [], "emptyObject": {}, "arrayOfNumbers": [1, 2, 3, 4, 5], "arrayOfObjects": [{"id": 1, "profileType":"public","blocked": false}, {"id":2, "profileType":"private", "blocked": true}, {"id": 3, "profileType":"private", "blocked": false}], "superNested": { "level1": {"level2": {"level3": {"level4":{"level5":{"level6":"Btw I use Arch"}}}}}}
}`;

    const appInput: HTMLTextAreaElement = document.querySelector('#app #app__input');
    const datasetSelector: HTMLSelectElement = document.querySelector('#controls__data-set-selector') as HTMLSelectElement;
    const themeSelector:HTMLSelectElement = document.querySelector('#controls__theme-selector') as HTMLSelectElement;
    const textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    
    textArea.textContent = defaultJSONString;
   
    // render on init
    renderText(defaultJSONString);

    // emulate textarea focusing
    appInput.addEventListener('click', event => {
        const target: HTMLElement = event.target as HTMLElement;

        // if event target is not text area
        if(target.tagName !== 'TEXTAREA') {
            // focus on textarea end
            const lineEnd = textArea.value.length;

            textArea.setSelectionRange(lineEnd, lineEnd);
            textArea.focus();
        }
    });

    datasetSelector.addEventListener('change', event => {
        const datasetName = getSelectedDatasetName();
        const dataset = importDataset(datasetName);

        renderText(dataset);
        textArea.value = dataset;
    });

    // render on theme changing
    themeSelector.addEventListener('change', event => {
        renderText(textArea.value);
    });

    // render formatted JSON on textarea changing
    textArea.addEventListener('keyup', (event) => {
        renderText(textArea.value);
    });
}



init();