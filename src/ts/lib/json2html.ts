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
function renderComplexItem(keyName: string, itemValue: any){
    let nestedObject = itemValue;
    let renderedNested = render(nestedObject);

    let nestedElement = document.createElement('div');
    let parentPropertyName = document.createElement('span');
    let typeSignature = document.createElement('span');

    nestedElement.classList.add('json2html-nestedObject');
    parentPropertyName.textContent = keyName + ": ";
    parentPropertyName.classList.add('json2html-key');
    typeSignature.textContent = itemValue.constructor.name;

    let constructorName = itemValue.constructor.name;
    constructorName = constructorName[0].toLowerCase() + constructorName.slice(1);

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
function render(parsedJSON: any){
    let keys = Object.keys(parsedJSON);
    let siblings: any[] = [];
    let rendered: HTMLDivElement = document.createElement('div');
    
    keys.forEach(key => {
        if(
            parsedJSON[key].constructor.name === "Object" 
            || parsedJSON[key].constructor.name === "Array"
        ) {
           let nestedElement = renderComplexItem(key, parsedJSON[key]);
            
            siblings.push(nestedElement);
        } else {
            let element = renderPrimitiveItem(key, parsedJSON[key]);

            siblings.push(element);
        }
    });

    siblings.forEach(node => {
        rendered.appendChild(node);
    });

    return rendered;
}



export function json2html(params: {json: string}){
    let parent = document.createElement('div');

    let parsed = JSON.parse(params.json);
    let rendered = render(parsed);
    parent.appendChild(rendered);
    console.log(rendered, parent);

    return parent;
}