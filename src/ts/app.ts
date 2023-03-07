import { json2html } from './lib/json2html';



function init(){
    let defaultJSONString = '{ "userName": "Alex", "age": 32, "bornDate": "5-10-1985", "banned": false, "registrationData": {"date": "2-11-2011",  "IP": "8.8.8.8"}, "deletionDate": "null", "userTag": "undefined", "groups": [{"type": "public", "name": "managers"}, {"type":"private", "name": "admins"}] }';

    let textArea: HTMLTextAreaElement = document.querySelector('#app #app__input textarea');
    textArea.textContent = defaultJSONString;

    let defaultFormatted = json2html({
        json: defaultJSONString,
    });

    updateOutput(defaultFormatted);

    // update formatted JSON on textarea changing
    textArea.addEventListener('keyup', (event) => {
        let formatted = json2html({
            json: textArea.value,
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