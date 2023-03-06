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

            parentPropertyName.textContent = key + ":";
            typeSignature.textContent = parsedJSON[key].constructor.name;

            nestedElement.appendChild(typeSignature);
            nestedElement.appendChild(parentPropertyName);
            nestedElement.appendChild(renderedNested);
            
            siblings.push(nestedElement);
        } else {
            let element = document.createElement('div');
            let propertyName = document.createElement('span');
            let value = document.createElement('span');

            propertyName.textContent = key + ": ";
            value.textContent = typeof parsedJSON[key]  == 'string' ? `"${parsedJSON[key]}"` : parsedJSON[key]; 

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