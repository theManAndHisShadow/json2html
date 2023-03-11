import { isLink, isArray, isObject, addMultipleEventHandlers, emulateEvent } from './helpers';
import { updateThemeCSS } from './themes';

/**
 * Checks given value type and returns CSS class name for it.
 * @param value 
 * @returns CSS class name, for example: "json2html-type__boolean"
 */
function getValueTypeClassName(value: any){
    let classNameSample = 'json2html-type__';
    let type = value == null || value == "undefined" ? value : typeof value;

    return classNameSample + type;
}



/**
 * Checks given value type and if is type "string" wraps value to double quotes.
 * @param value 
 * @returns prepared value
 */
function wrapValue(value: any){
    let isString = typeof value == 'string';
    let isNull = value == null;
    let wrapped = value;

    if(isNull) wrapped = `${value}`;
    if(isString) wrapped = `"${value}"`;

    return wrapped;
}



/**
 * Renders pair, where key:value - value is primitive type value.
 * @param keyName
 * @param itemValue 
 * @returns ready for other manipulations HTML Node.
 */
function renderPrimitiveItem(params: {keyName: string, itemValue: any, highlightLinks: boolean,  showTypeOnHover: boolean}){
    let element = document.createElement('div');
    element.classList.add('json2html-pair');
    
    let propertyName = document.createElement('span');
    propertyName.textContent = params.keyName + ": ";
    propertyName.classList.add('json2html-key');
    
    let value = document.createElement('span');
    
    // if it`s a negative number - render "minus sign"
    if(typeof params.itemValue === 'number' && params.itemValue < 0){
        let minusSign = document.createElement('span');
        minusSign.classList.add('json2html-value__minus-sign');
        minusSign.textContent = '-';

        value.appendChild(minusSign);
        value.innerHTML += (Math.abs(params.itemValue));
    } else {
        value.textContent = wrapValue(params.itemValue);
    }

    // show browser tooltip at primitive key value on hover
    if(params.showTypeOnHover === true) {
        let tip = params.itemValue == null ? 'null' : typeof params.itemValue;

        // special tooltip for links
        if(params.highlightLinks === true && isLink(params.itemValue)) {
            tip = 'string (clickable link)'
        }

        value.setAttribute('title', tip);
    }

    // insert link if highlightLinks is true and string is link
    if(params.highlightLinks === true && isLink(params.itemValue)) {
        let link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.href = params.itemValue;
        link.textContent = `"${params.itemValue}"`;

        value.textContent = '';
        value.appendChild(link);
    }

    value.classList.add('json2html-value');
    value.classList.add(getValueTypeClassName(params.itemValue));

    element.appendChild(propertyName);
    element.appendChild(value);

    return element;
}



/**
 * Checks the presence of nested elements.
 * @param targetItem parent item to check
 * @returns 
 */
function hasNestedItems(targetItem: any){
    let result = false;
    
    Object.values(targetItem).forEach(targetItem => {
        if(targetItem !== null){
            if(isObject(targetItem) || isArray(targetItem)) result = true;
        }
    });

    return result;
}



/**
 * Updates the text content of the collapse button.
 * @param spoiler target spoiler, that affects to collapse buttons text contents
 * @param collapseButton Target collapse button. An optional argument. If empty, the function will itself look for a button
 */
function updateCollapseToggle(spoiler: Element, collapseButton?: Element){
    let collapseButtonClassName = 'json2html-collapse-all-toggle';
    collapseButton = collapseButton || spoiler.parentElement.querySelector(`.${collapseButtonClassName}`);

    let toggleState = spoiler.className.split('--')[1];
    let action = toggleState == "uncollapsed" ? "collapse" : "uncollapse";
    if(collapseButton) collapseButton.textContent = `(${action} all)`
}



/**
 * Renders collapse helper buttons near complex pairs.
 * @param params 
 */
function renderCollapseButtons(params: {targetSpoiler: Element, renderIn: Element, collapsed: boolean, nestedObject: any}){
    let collapseButtonClassName = 'json2html-collapse-all-toggle';
    let isExist = params.renderIn.querySelector(`${collapseButtonClassName}`);
    let collapseAllNestedBtn = isExist || document.createElement('span');
    if(!isExist) collapseAllNestedBtn.className = collapseButtonClassName;
    
    // initial button element update
    updateCollapseToggle(params.targetSpoiler, collapseAllNestedBtn);

    // on click emulate clicking at spoiler buttons c:
    collapseAllNestedBtn.addEventListener('click', event => {
        // get all spoilers button on that tree branch
        let sploilers = params.renderIn.querySelectorAll('.' + params.targetSpoiler.className);
        
        sploilers.forEach(spoiler => {
            emulateEvent(spoiler, 'click');

            updateCollapseToggle(spoiler);
        });

    });

    // add once
    if(!isExist) params.renderIn.appendChild(collapseAllNestedBtn);
}



/**
 * Renders complex pair, where key:value - value is Object or Array.
 * @param keyName 
 * @param itemValue 
 * @returns ready for other manipulations HTML Node.
 */
function renderComplexItem(params: {keyName: string, itemValue: any, renderNestedLength: boolean, highlightLinks: boolean, collapseAll: boolean,  showTypeOnHover: boolean}){
    let nestedObject = params.itemValue;

    let renderedNested = render({
        parsedJSON: nestedObject,
        renderNestedLength: params.renderNestedLength,
        highlightLinks: params.highlightLinks,
        collapseAll: params.collapseAll,
        showTypeOnHover: params.showTypeOnHover,
    });
    renderedNested.classList.add('json2html-nested-value')

    let nestedElement = document.createElement('div');
    nestedElement.classList.add('json2html-complex-pair');

    let spoilerBtn = document.createElement('span');
    spoilerBtn.textContent = '▶';

    // collapsin at start (or not)
    if(params.collapseAll === true){
        spoilerBtn.classList.add('json2html-spoiler-toggle--collapsed');
        renderedNested.setAttribute('hidden', '');
    } else {
        spoilerBtn.classList.add('json2html-spoiler-toggle--uncollapsed');
    }

    let parentPropertyName = document.createElement('span');
    parentPropertyName.textContent = params.keyName + ": ";
    parentPropertyName.classList.add('json2html-key');

    let typeSignature = document.createElement('span');
    typeSignature.textContent = params.itemValue.constructor.name;


    if(Object.values(nestedObject).length > 0){
        // Adding multiple event handlers, 
        // clicking on an element from the array below should invoke callback
        addMultipleEventHandlers([
            spoilerBtn, 
            parentPropertyName, 
            typeSignature
        ], 'click', event => {
            let collapsed = 'json2html-spoiler-toggle--collapsed';
            let uncollapsed = 'json2html-spoiler-toggle--uncollapsed';
    
            // toggle nested object
            if(spoilerBtn.classList.contains(collapsed)) {
                spoilerBtn.classList.remove(collapsed);
                spoilerBtn.classList.add(uncollapsed);
                renderedNested.removeAttribute('hidden');
            } else {
                spoilerBtn.classList.add(collapsed);
                spoilerBtn.classList.remove(uncollapsed);
                renderedNested.setAttribute('hidden', '');
            };
    
            updateCollapseToggle(spoilerBtn);
        });
    }

    let constructorName = params.itemValue.constructor.name;
    constructorName = constructorName[0].toLowerCase() + constructorName.slice(1);

    // only for Array items
    if(params.renderNestedLength === true) {
        if(isArray(params.itemValue)) {
            let length = params.itemValue.length == 0 ? 'empty' : params.itemValue.length;
            let word = length == "empty" 
                    ? "" : length == 1 
                        ? ' item' : " items";
    
            typeSignature.textContent += ` (${length}${word})`;
        } else if(isObject(params.itemValue) && Object.keys(params.itemValue).length === 0){
            typeSignature.textContent += ` (empty)`;
        }
    }

    typeSignature.classList.add('json2html-type__' + constructorName);
    
    if(Object.values(nestedObject).length > 0) nestedElement.appendChild(spoilerBtn);

    nestedElement.appendChild(parentPropertyName);
    nestedElement.appendChild(typeSignature);

    // if item contains nested object 
    // render special button "collapse all" 
    // only complex values that can be collapsed 
    // cause primitive values conatins simple structures
    if(Object.values(nestedObject).length > 0 && hasNestedItems(nestedObject)) {
        renderCollapseButtons({
            targetSpoiler: spoilerBtn,
            renderIn: nestedElement,
            collapsed: params.collapseAll,
            nestedObject: nestedObject,
        });
    }

    if(Object.values(nestedObject).length > 0) nestedElement.appendChild(renderedNested);
    
    return nestedElement;
}



/**
 * Renders entire object tree into HTML tags and nodes.
 * @param parsedJSON regular object, parsed JSON object
 * @returns fully ready HTMLDivElement
 */
function render(params: {parsedJSON: any, renderNestedLength: boolean, highlightLinks: boolean, collapseAll: boolean,  showTypeOnHover: boolean}){
    let keys = Object.keys(params.parsedJSON);

    // rendered child nodes
    let siblings: any[] = [];

    // result node
    let rendered: HTMLDivElement = document.createElement('div');
    rendered.classList.add('json2html-container');
    
    // render per key
    keys.forEach(key => {
        // if key has complex value - use renderComplexItem()
        if(isArray(params.parsedJSON[key]) || isObject(params.parsedJSON[key])) {
            let nestedElement = renderComplexItem({
                keyName: key,
                itemValue: params.parsedJSON[key],
                renderNestedLength: params.renderNestedLength,
                highlightLinks: params.highlightLinks,
                collapseAll: params.collapseAll,
                showTypeOnHover: params.showTypeOnHover,
           });
            
            siblings.push(nestedElement);

        // if key has primitive value - use renderPrimitiveItem()
        } else {
            let element = renderPrimitiveItem({
                keyName: key,
                itemValue:  params.parsedJSON[key],
                highlightLinks: params.highlightLinks,
                showTypeOnHover: params.showTypeOnHover,
            });
            
            siblings.push(element);
        }
    });

    // make tree
    siblings.forEach(node => {
        rendered.appendChild(node);
    });

    return rendered;
}



// define some types
type ErrorHandler = (error: Error) => void
/**
 * Renders JSON string in colored and formatted HTML block.
 * @param params.json JSON string to render
 * @param params.renderNestedLength Allows render Array length in Array type signature. By default - true.
 * @param params.highlightLinks Allows render url string as <a> clickable tag. By default - true.
 * @param params.collapseAll On true value - renders HTML block at start with minimized (collapsed) content. By default - true.
 * @param params.showTypeOnHover On true value - show default html "title" tooltip on primitive values with their type. By default - true.
 * @param params.theme Renders HTML block with given theme. By default uses "dracula" theme. 
 * Supports 9 themes: andromeda, daylight, dracula, gruvbox-dark, gruvbox-light, github-light, github-dark, horizon, monokai. 
 * Also supports user themes. For more info check project`s github mini wiki.
 * @param params.onError error handler callback function, gives access to Error instance.
 * @returns 
 */
export function json2html(params: {
    json: string, 
    renderNestedLength?: boolean, 
    highlightLinks?: boolean, 
    collapseAll?: boolean, 
    showTypeOnHover?: boolean, 
    theme?: string,
    onError?:ErrorHandler,
}){
    // default values
    params.renderNestedLength = params.renderNestedLength == false ? false : true;
    params.highlightLinks = params.highlightLinks == false ? false : true;
    params.collapseAll = params.collapseAll == false ? false : true;
    params.showTypeOnHover = params.showTypeOnHover == false ? false : true;
    params.theme = params.theme || 'andromeda';

    // update json2html style tag at start
    updateThemeCSS(params.theme);

    // Wrapping JSON.parse call in trycatch
    try {
        let parsed = JSON.parse(params.json);
        let rendered = render({
            parsedJSON: {json: parsed},
            renderNestedLength: params.renderNestedLength,
            highlightLinks: params.highlightLinks,
            collapseAll: params.collapseAll,
            showTypeOnHover: params.showTypeOnHover,
        });
        
        return rendered;
    } catch (error) {
        // Invoking params.onError for error handling 
        params.onError(error);
    }
}