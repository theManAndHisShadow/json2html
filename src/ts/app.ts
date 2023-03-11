import { json2html } from './lib/json2html';


interface Collection {
    [key: string]: {
        [key: string]: string, 
    };
}

const themes:Collection= {
    dracula: {
        background: '#21232c',
        tile: '#282a36',
        border: '#424242',
        foreground: '#ffffff',
        error: '#ee5d44',
    },

    monokai: {
        background: '#22231e',
        tile: '#272822',
        border: '#424242',
        foreground: '#ffffff',
        error: '#fd971f',
    },

    daylight: {
        background: '#e7e7e7',
        tile: '#ffffff',
        border: '#b6b6b6',
        foreground: '#000000',
        error: '#bf0404',
    },

    horizon: {
        background: '#ded5cc',
        tile: '#ffffff',
        border: '#b6b6b6',
        foreground: '#2f2f2f',
        error: '#bf0404',
    },

    "github-light": {
        background: '#e7e7e7',
        tile: '#ffffff',
        border: '#cacdd1',
        foreground: '#25292f',
        error: '#bf0404',
    },

    "github-dark": {
        background: '#10161d',
        tile: '#0d1117',
        border: '#30373d',
        foreground: '#c9d1d9',
        error: '#cd3c3c',
    },

    "gruvbox-dark": {
        background: '#242424',
        tile: '#282828',
        border: '#3f3f3f',
        foreground: '#A89984',
        error: '#bf241d',
    },

    "gruvbox-light": {
        background: '#e1d8b2',
        tile: '#FBF1C7',
        border: '#b7a5a0',
        foreground: '#7C6F64',
        error: '#bf241d',
    },

    andromeda:{
        background: '#1e2127',
        tile: '#23262e',
        border: '#444444',
        foreground: '#adb2bc',
        error: '#bf241d',
    },
}


function preloadThemeFiles(){
    let allThemeNames = Object.keys(themes);

    allThemeNames.forEach(theme => {
        let preloadedCSS = document.createElement('link');
        preloadedCSS.setAttribute('rel', 'preload');
        preloadedCSS.setAttribute('href', `css/themes/${theme}.css`);
        preloadedCSS.setAttribute('as', 'style');
        document.head.appendChild(preloadedCSS);
    });
}



/**
 * Returns current seleted by user app theme name.
 * @returns theme name
 */
function getSelectedThemeName(){
    let themeSelector:HTMLSelectElement = document.querySelector('#controls__theme-selector') as HTMLSelectElement;

    return themeSelector.value;
}



/**
 * Updates app colors using theme name. Using 'ugly' methods
 * @param themeName 
 */
function changeAppTheme(themeName: string){
    let themeColors = themes[themeName];

    let appContainer: HTMLDivElement = document.querySelector('#app');
    let appInput: HTMLTextAreaElement = document.querySelector('#app #app__input');
    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    let appControls: HTMLDivElement = document.querySelector('#app__controls');
    let themeSelector: HTMLSelectElement = document.querySelector('#app__controls select');
    let outputContainer: HTMLDivElement = document.querySelector('#app__output');

    appContainer.style.background = themeColors.background;

    textArea.style.background = themeColors.tile;
    appInput.style.background = themeColors.tile;
    outputContainer.style.background = themeColors.tile;
    outputContainer.style.background = themeColors.tile;
    themeSelector.style.background = themeColors.tile;
    
    
    appControls.style.color = themeColors.foreground;
    textArea.style.color = themeColors.foreground;
    outputContainer.style.color = themeColors.foreground;
    themeSelector.style.color = themeColors.foreground;

    textArea.style.borderColor = themeColors.border;
    appInput.style.borderColor = themeColors.border;
    outputContainer.style.borderColor = themeColors.border;
    themeSelector.style.borderColor = themeColors.border;
}



/**
 * Show or hide error message container.
 * @param state visibility of errror message container
 * @param message error message
 */
function toggleErrorMessage(state: boolean, message?: string){
    let errorMessageConainer:HTMLDivElement = document.querySelector('#app__error-message');
    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');

    if(state === true) {
        let errorMessage = `[Error! ${message}]:`;
        let themeName = getSelectedThemeName();
        let themeColors = themes[themeName];
        errorMessageConainer.textContent = errorMessage;
        errorMessageConainer.style.display = 'initial';
        errorMessageConainer.style.color = themeColors.error;
        textArea.style.color = themeColors.error;
        textArea.style.top = '20px';
    } else {
        errorMessageConainer.style.display = 'none';
        textArea.style.top = '0px';
    }
}



/**
 * Updates output container inner content.
 * @param newOutput 
 */
function updateOutput(newOutput: HTMLDivElement){
    let output = document.querySelector('#app__output');

    output.children.length == 0 
        ? output.appendChild(newOutput) 
        : output.replaceChild(newOutput, output.firstElementChild);
}



/**
 * Renders text as parsed and formatted JSON.
 * @param text 
 */
function renderText(text: string){
    let themeName = getSelectedThemeName();

    let formatted = json2html({
        json: text,
        collapseAll: false,
        showTypeOnHover: true,
        theme: themeName,
        // on error show error message
        onError: error => {
            toggleErrorMessage(true, error.message);
        },
    });

    // if variable 'formatted' returned from json2html function
    // it means that code executed wuthout error
    if(formatted) {
        // then hide error message
        toggleErrorMessage(false);

        changeAppTheme(themeName);
        updateOutput(formatted);
    }
}



function init(){
    preloadThemeFiles();

    let defaultJSONString = `{
    "string":"Hello world!", "paragraph":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?", "link":"https://www.freedesktop.org/wiki/","number":42, "negativeNumber": -1,"floatNumber":3.1415926535,"boolean":true, "isNull": null, "isUndefined": "undefined", "emptyArray": [], "emptyObject": {}, "arrayOfNumbers": [1, 2, 3, 4, 5], "arrayOfObjects": [{"id": 1, "profileType":"public","blocked": false}, {"id":2, "profileType":"private", "blocked": true}, {"id": 3, "profileType":"private", "blocked": false}], "superNested": { "level1": {"level2": {"level3": {"level4":{"level5":{"level6":"Btw I use Arch"}}}}}}
}`;

    let appInput: HTMLTextAreaElement = document.querySelector('#app #app__input');
    let themeSelector:HTMLSelectElement = document.querySelector('#controls__theme-selector') as HTMLSelectElement;
    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    textArea.textContent = defaultJSONString;
   
    // render on init
    renderText(defaultJSONString);

    // emulate textarea focusing
    appInput.addEventListener('click', event => {
        let target: HTMLElement = event.target as HTMLElement;

        // if event target is not text area
        if(target.tagName !== 'TEXTAREA') {
            // focus on textarea end
            const lineEnd = textArea.value.length;

            textArea.setSelectionRange(lineEnd, lineEnd);
            textArea.focus();
        }
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