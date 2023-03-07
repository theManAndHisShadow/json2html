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



function render(parsedJSON: any){
    let keys = Object.keys(parsedJSON);
    let siblings: any[] = [];
    let rendered: HTMLDivElement = document.createElement('div');
    
    keys.forEach(key => {
        if(parsedJSON[key].constructor.name === "Object") {
            let nestedObject = parsedJSON[key];
            let renderedNested = render(nestedObject);

            let nestedElement = document.createElement('div');
            let parentPropertyName = document.createElement('span');
            let typeSignature = document.createElement('span');

            nestedElement.classList.add('json2html-nestedObject');
            parentPropertyName.textContent = key + ": ";
            parentPropertyName.classList.add('json2html-key');
            typeSignature.textContent = parsedJSON[key].constructor.name;
            typeSignature.classList.add('json2html-type__object');
            

            nestedElement.appendChild(parentPropertyName);
            nestedElement.appendChild(typeSignature);
            nestedElement.appendChild(renderedNested);
            
            siblings.push(nestedElement);
        } else {
            let element = document.createElement('div');
            let propertyName = document.createElement('span');
            let value = document.createElement('span');

            element.classList.add('json2html-pair');

            propertyName.textContent = key + ": ";
            propertyName.classList.add('json2html-key');

            value.textContent = wrapValue(parsedJSON[key]);
            value.classList.add('json2html-value');
            value.classList.add(getValueTypeClassName(parsedJSON[key]));

            element.appendChild(propertyName);
            element.appendChild(value);

            siblings.push(element);
        }
    });

    siblings.forEach(node => {
        rendered.appendChild(node);
    });

    return rendered;
}



export function json2html(json: string, isAlreadyParsed?: boolean){
    let parent = document.createElement('div');

    let parsed = JSON.parse(json);
    let rendered = render(parsed);
    parent.appendChild(rendered);
    console.log(rendered, parent);

    return parent;
}