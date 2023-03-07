/**
 * Checks given value type and returns CSS class name for it.
 * @param value 
 * @returns CSS class name, for example: "json2html-type__boolean"
 */
function getValueTypeClassName(value: any){
    let classNameSample = 'json2html-type__';
    let type = value == "null" || value == "undefined" ? value : typeof value;

    return classNameSample + type;
}



/**
 * Checks given value type and if is type "string" wraps value to double quotes.
 * @param value 
 * @returns prepared value
 */
function wrapValue(value: any){
    let isString = typeof value == 'string';
    let isNull = value == 'null';
    let isUndefined = value == 'undefined';
    let wrapped = !isNull && !isUndefined && isString ?  `"${value}"` : value;

    return wrapped;
}



/**
 * Renders pair, where key:value - value is primitive type value.
 * @param keyName
 * @param itemValue 
 * @returns ready for other manipulations HTML Node.
 */
function renderPrimitiveItem(keyName: string, itemValue: any){
    let element = document.createElement('div');
    let propertyName = document.createElement('span');
    let value = document.createElement('span');

    element.classList.add('json2html-pair');

    propertyName.textContent = keyName + ": ";
    propertyName.classList.add('json2html-key');

    value.textContent = wrapValue(itemValue);

    value.classList.add('json2html-value');
    value.classList.add(getValueTypeClassName(itemValue));

    element.appendChild(propertyName);
    element.appendChild(value);

    return element;
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

    let nestedElement = document.createElement('div');
    let parentPropertyName = document.createElement('span');
    let typeSignature = document.createElement('span');

    nestedElement.classList.add('json2html-nestedObject');
    parentPropertyName.textContent = params.keyName + ": ";
    parentPropertyName.classList.add('json2html-key');
    typeSignature.textContent = params.itemValue.constructor.name;

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
        let isObject =  params.parsedJSON[key].constructor.name === "Object";
        let isArray = params.parsedJSON[key].constructor.name === "Array";
        if(isObject || isArray) {
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