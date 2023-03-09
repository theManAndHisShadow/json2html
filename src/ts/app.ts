import { json2html } from './lib/json2html';



function init(){
    let defaultJSONString = `{
    "string":"Hello world!", "paragraph":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?", "link":"https://www.freedesktop.org/wiki/","number":42, "negativeNumber": -1,"floatNumber":3.1415926535,"boolean":true, "isNull": null, "isUndefined": "undefined", "emptyArray": [], "emptyObject": {}, "arrayOfNumbers": [1, 2, 3, 4, 5], "arrayOfObjects": [{"id": 1, "profileType":"public","blocked": false}, {"id":2, "profileType":"private", "blocked": true}, {"id": 3, "profileType":"private", "blocked": false}], "superNested": { "level1": {"level2": {"level3": {"level4":{"level5":{"level6":"Btw I use Arch"}}}}}}
}`;

    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    textArea.textContent = defaultJSONString;

    let defaultFormatted = json2html({
        json: defaultJSONString,
        collapseAll: false,
        showTypeOnHover: true,
        theme: 'dracula',
    });

    updateOutput(defaultFormatted);

    // update formatted JSON on textarea changing
    textArea.addEventListener('keyup', (event) => {
        let formatted = json2html({
            json: textArea.value,
            collapseAll: false,
            showTypeOnHover: true,
            theme: 'dracula',
        });

        updateOutput(formatted);
    });
}



function updateOutput(newOutput: HTMLDivElement){
    let output = document.querySelector('#app__output');

    output.children.length == 0 
        ? output.appendChild(newOutput) 
        : output.replaceChild(newOutput, output.firstElementChild);
}



init();