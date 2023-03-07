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
function renderPrimitiveItem(keyName: string, itemValue: any){

    console.log(keyName, itemValue);
    
    let element = document.createElement('div');
    element.classList.add('json2html-pair');
    
    let propertyName = document.createElement('span');
    propertyName.textContent = keyName + ": ";
    propertyName.classList.add('json2html-key');
    
    let value = document.createElement('span');
    value.textContent = wrapValue(itemValue);

    value.classList.add('json2html-value');
    value.classList.add(getValueTypeClassName(itemValue));

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
function renderComplexItem(params: {keyName: string, itemValue: any, renderArrayLength: boolean}){
    let nestedObject = params.itemValue;

    let renderedNested = render({
        parsedJSON: nestedObject,
        renderArrayLength: params.renderArrayLength,
    });
    renderedNested.classList.add('json2html-nested-value')

    let nestedElement = document.createElement('div');
    nestedElement.classList.add('json2html-complex-pair');

    let sploilerTriangle = document.createElement('span');
    sploilerTriangle.textContent = '▶';
    sploilerTriangle.classList.add('json2html-spoiler-trigger--collapsed');

    let parentPropertyName = document.createElement('span');
    parentPropertyName.textContent = params.keyName + ": ";
    parentPropertyName.classList.add('json2html-key');

    let typeSignature = document.createElement('span');
    typeSignature.textContent = params.itemValue.constructor.name;

    renderedNested.setAttribute('hidden', '');

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
function render(params: {parsedJSON: any, renderArrayLength: boolean}){
    let keys = Object.keys(params.parsedJSON);
    let siblings: any[] = [];
    let rendered: HTMLDivElement = document.createElement('div');
    
    keys.forEach(key => {
        let isNotNull = params.parsedJSON[key] !== null;
        let isObject = isNotNull && params.parsedJSON[key].constructor.name === "Object";
        let isArray = isNotNull && params.parsedJSON[key].constructor.name === "Array";

        console.log(params.parsedJSON[key], isNotNull, isArray, isObject);

        if(isNotNull && isObject || isArray) {
            let nestedElement = renderComplexItem({
                keyName: key,
                itemValue: params.parsedJSON[key],
                renderArrayLength: params.renderArrayLength,
           });
            
            siblings.push(nestedElement);
        } else {
            let element = renderPrimitiveItem(key, params.parsedJSON[key]);

            siblings.push(element);
        }
    });

    siblings.forEach(node => {
        rendered.appendChild(node);
    });

    return rendered;
}



export function json2html(params: {json: string, renderArrayLength?: boolean}){
    // if renderArrayLength param not given - pass true
    params.renderArrayLength = params.renderArrayLength == false ? false : true;

    let parent = document.createElement('div');

    let parsed = JSON.parse(params.json);
    let rendered = render({
        parsedJSON: parsed,
        renderArrayLength: params.renderArrayLength,
    });
    
    parent.appendChild(rendered);

    console.log(params);

    return parent;
}