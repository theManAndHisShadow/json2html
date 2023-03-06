import { json2html } from './lib/json2html';



function init(){
    let defaultJSONString = '{"userName": "Alex", "age": 32, "bornDate": "5-10-1985", "banned": false, "registrationData": {"date": "2-11-2011",  "IP": "8.8.8.8"}}';

    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    textArea.textContent = defaultJSONString;

    updateOutput(json2html(defaultJSONString));

    // update formatted JSON on textarea changing
    textArea.addEventListener('keyup', (event) => {
        updateOutput(json2html(textArea.value));
    });
}



function updateOutput(newOutput: HTMLDivElement){
    let output = document.querySelector('#app__output');

    output.children.length == 0 
        ? output.appendChild(newOutput) 
        : output.replaceChild(newOutput, output.firstElementChild);
}



init();