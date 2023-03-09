import { json2html } from './lib/json2html';


/**
 * Returns current seleted by user app theme name.
 * @returns theme name
 */
function getSelectedThemeName(){
    let themeSelector:HTMLSelectElement = document.querySelector('#controls__theme-selector') as HTMLSelectElement;

    return themeSelector.value;
}



/**
 * Renders text as parsed and formatted JSON.
 * @param text 
 */
function render(text: string){
    let themeName = getSelectedThemeName();

    let formatted = json2html({
        json: text,
        collapseAll: false,
        showTypeOnHover: true,
        theme: themeName
    });

    changeAppTheme(themeName);

    updateOutput(formatted);
}


/**
 * Updates app colors using theme name. Using 'ugly' methods
 * @param themeName 
 */
function changeAppTheme(themeName: string){
    interface Collection {
        [key: string]: {
            [key: string]: string, 
        };
    }

    const themes:Collection = {
        dracula: {
            background: '#21232c',
            tile: '#282a36',
            border: '#424242',
            foreground: '#ffffff',
        },

        monokai: {
            background: '#22231e',
            tile: '#272822',
            border: '#424242',
            foreground: '#ffffff',
        },

        daylight: {
            background: '#e7e7e7',
            tile: '#ffffff',
            border: '#b6b6b6',
            foreground: '#000000',
        },
    }

    let appContainer: HTMLDivElement = document.querySelector('#app');
    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    let appControls: HTMLDivElement = document.querySelector('#app__controls');
    let outputContainer: HTMLDivElement = document.querySelector('#app__output');

    appContainer.style.background = themes[themeName].background;

    textArea.style.background = themes[themeName].tile;
    outputContainer.style.background = themes[themeName].tile;
    
    appControls.style.color = themes[themeName].foreground;
    textArea.style.color = themes[themeName].foreground;
    outputContainer.style.color = themes[themeName].foreground;

    textArea.style.borderColor = themes[themeName].border;
    outputContainer.style.borderColor = themes[themeName].border;
}



function init(){
    let defaultJSONString = `{
    "string":"Hello world!", "paragraph":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?", "link":"https://www.freedesktop.org/wiki/","number":42, "negativeNumber": -1,"floatNumber":3.1415926535,"boolean":true, "isNull": null, "isUndefined": "undefined", "emptyArray": [], "emptyObject": {}, "arrayOfNumbers": [1, 2, 3, 4, 5], "arrayOfObjects": [{"id": 1, "profileType":"public","blocked": false}, {"id":2, "profileType":"private", "blocked": true}, {"id": 3, "profileType":"private", "blocked": false}], "superNested": { "level1": {"level2": {"level3": {"level4":{"level5":{"level6":"Btw I use Arch"}}}}}}
}`;

    let themeSelector:HTMLSelectElement = document.querySelector('#controls__theme-selector') as HTMLSelectElement;
    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    textArea.textContent = defaultJSONString;
   
    // render on init
    render(defaultJSONString);

    // render on theme changing
    themeSelector.addEventListener('change', event => {
        render(textArea.value);
    });

    // render formatted JSON on textarea changing
    textArea.addEventListener('keyup', (event) => {
        render(textArea.value);
    });
}



function updateOutput(newOutput: HTMLDivElement){
    let output = document.querySelector('#app__output');

    output.children.length == 0 
        ? output.appendChild(newOutput) 
        : output.replaceChild(newOutput, output.firstElementChild);
}



init();