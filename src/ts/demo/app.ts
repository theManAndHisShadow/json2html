import { generateCSSCode, updateThemeCSS} from '../lib/theming/themes';
import getFullTheme from './theming/themes';
import { json2html } from '../lib/core/json2html';
import { importDataset } from './datasets';
import draculaTheme from '../lib/theming/themes/dracula.theme';


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
    const themeColors = getFullTheme(themeName);
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
        theme: draculaTheme,
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