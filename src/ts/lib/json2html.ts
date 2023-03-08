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
 * Checks if given string is a link.
 * @param target string to check
 * @returns 
 */
function isLink(target: string){
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(target);
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
    value.textContent = wrapValue(params.itemValue);

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




type EventCallbackHandler = (event: Event) => void
/**
 * Adds multiple event handlers
 * @param targets array of targets
 * @param evenType event type
 * @param callback callback function with access to event instance
 */
function addMultipleEventHandlers(targets: HTMLSpanElement[], evenType: string, callback: EventCallbackHandler){
    targets.forEach(target => {
        target.addEventListener(evenType, event => {
            callback(event);
        });
    });
}



/**
 * Renders complex pair, where key:value - value is Object or Array.
 * @param keyName 
 * @param itemValue 
 * @returns ready for other manipulations HTML Node.
 */
function renderComplexItem(params: {keyName: string, itemValue: any, renderArrayLength: boolean, highlightLinks: boolean, collapseAll: boolean,  showTypeOnHover: boolean}){
    let nestedObject = params.itemValue;

    let renderedNested = render({
        parsedJSON: nestedObject,
        renderArrayLength: params.renderArrayLength,
        highlightLinks: params.highlightLinks,
        collapseAll: params.collapseAll,
        showTypeOnHover: params.showTypeOnHover,
    });
    renderedNested.classList.add('json2html-nested-value')

    let nestedElement = document.createElement('div');
    nestedElement.classList.add('json2html-complex-pair');

    let sploilerTriangle = document.createElement('span');
    sploilerTriangle.textContent = '▶';

    // collapsin at start (or not)
    if(params.collapseAll === true){
        sploilerTriangle.classList.add('json2html-spoiler-trigger--collapsed');
        renderedNested.setAttribute('hidden', '');
    } else {
        sploilerTriangle.classList.add('json2html-spoiler-trigger--uncollapsed');
    }

    let parentPropertyName = document.createElement('span');
    parentPropertyName.textContent = params.keyName + ": ";
    parentPropertyName.classList.add('json2html-key');

    let typeSignature = document.createElement('span');
    typeSignature.textContent = params.itemValue.constructor.name;

    // Adding multiple event handlers, 
    // clicking on an element from the array below should invoke callback
    addMultipleEventHandlers([
        sploilerTriangle, 
        parentPropertyName, 
        typeSignature
    ], 'click', event => {
        let collapsed = 'json2html-spoiler-trigger--collapsed';
        let uncollapsed = 'json2html-spoiler-trigger--uncollapsed';

        // toggle nested object
        if(sploilerTriangle.classList.contains(collapsed)) {
            sploilerTriangle.classList.remove(collapsed);
            sploilerTriangle.classList.add(uncollapsed);
            renderedNested.removeAttribute('hidden');
        } else {
            sploilerTriangle.classList.add(collapsed);
            sploilerTriangle.classList.remove(uncollapsed);
            renderedNested.setAttribute('hidden', '');
        };
    });
    

    let constructorName = params.itemValue.constructor.name;
    constructorName = constructorName[0].toLowerCase() + constructorName.slice(1);

    // only for Array items
    let isArray = params.itemValue.constructor.name === "Array";
    if(isArray && params.renderArrayLength === true) {
        let length = params.itemValue.length == 0 ? 'empty' : params.itemValue.length;
        let word = length == "empty" 
                ? "" : length == 1 
                    ? ' item' : " items";

        typeSignature.textContent += ` (${length}${word})`;
    }

    typeSignature.classList.add('json2html-type__' + constructorName);
    

    nestedElement.appendChild(sploilerTriangle);
    nestedElement.appendChild(parentPropertyName);
    nestedElement.appendChild(typeSignature);
    nestedElement.appendChild(renderedNested);
    
    return nestedElement;
}



/**
 * 
 * @param parsedJSON 
 * @returns 
 */
function render(params: {parsedJSON: any, renderArrayLength: boolean, highlightLinks: boolean, collapseAll: boolean,  showTypeOnHover: boolean}){
    let keys = Object.keys(params.parsedJSON);
    let siblings: any[] = [];
    let rendered: HTMLDivElement = document.createElement('div');
    rendered.classList.add('json2html-container');
    
    keys.forEach(key => {
        let isNotNull = params.parsedJSON[key] !== null;
        let isObject = isNotNull && params.parsedJSON[key].constructor.name === "Object";
        let isArray = isNotNull && params.parsedJSON[key].constructor.name === "Array";

        if(isNotNull && isObject || isArray) {
            let nestedElement = renderComplexItem({
                keyName: key,
                itemValue: params.parsedJSON[key],
                renderArrayLength: params.renderArrayLength,
                highlightLinks: params.highlightLinks,
                collapseAll: params.collapseAll,
                showTypeOnHover: params.showTypeOnHover,
           });
            
            siblings.push(nestedElement);
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

    siblings.forEach(node => {
        rendered.appendChild(node);
    });

    return rendered;
}



function injectThemeCSS(themeName: string){
    const filePath = `css/themes/${themeName}.css`;
    const newStyleElement = document.createElement('link');
    newStyleElement.setAttribute('rel', 'stylesheet');
    newStyleElement.setAttribute('href', filePath);

    document.head.appendChild(newStyleElement);
}



export function json2html(params: {json: string, renderArrayLength?: boolean, highlightLinks?: boolean, collapseAll?: boolean, showTypeOnHover?: boolean, theme?: string}){
    // if renderArrayLength param not given - pass true
    params.renderArrayLength = params.renderArrayLength == false ? false : true;
    params.highlightLinks = params.highlightLinks == false ? false : true;
    params.collapseAll = params.collapseAll == false ? false : true;
    params.showTypeOnHover = params.showTypeOnHover == false ? false : true;
    params.theme = params.theme || 'default';

    injectThemeCSS(params.theme);

    let parsed = JSON.parse(params.json);
    let rendered = render({
        parsedJSON: parsed,
        renderArrayLength: params.renderArrayLength,
        highlightLinks: params.highlightLinks,
        collapseAll: params.collapseAll,
        showTypeOnHover: params.showTypeOnHover,
    });

    console.log(params, rendered.parentElement);
    return rendered;
}