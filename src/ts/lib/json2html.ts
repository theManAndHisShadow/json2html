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

            let valueTypeCSSClassName;
            if(parsedJSON[key] == "null") {
                valueTypeCSSClassName = 'json2html-type__null';
                value.textContent = parsedJSON[key]; 
            } else if (parsedJSON[key] == "undefined") {
                valueTypeCSSClassName = 'json2html-type__undefined';
                value.textContent = parsedJSON[key]; 
            } else {
                valueTypeCSSClassName = 'json2html-type__' + typeof parsedJSON[key];
                value.textContent = typeof parsedJSON[key]  == 'string' ? `"${parsedJSON[key]}"` : parsedJSON[key]; 
            }

            value.classList.add('json2html-value');
            value.classList.add(valueTypeCSSClassName);

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