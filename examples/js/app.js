// import json2html from "./libs/json2html/json2html.min.js";
import monokaiTheme from "./libs/json2html/themes/monokai.theme.js"
import json2html from "./libs/json2html/json2html.min.js";

const jsonString = '{"string":"Hello world!", "paragraph":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?", "link":"https://www.freedesktop.org/wiki/","number":42, "negativeNumber": -1,"floatNumber":3.1415926535,"boolean":true, "isNull": null, "isUndefined": "undefined", "emptyArray": [], "emptyObject": {}, "arrayOfNumbers": [1, 2, 3, 4, 5], "arrayOfObjects": [{"id": 1, "profileType":"public","blocked": false}, {"id":2, "profileType":"private", "blocked": true}, {"id": 3, "profileType":"private", "blocked": false}], "superNested": { "level1": {"level2": {"level3": {"level4":{"level5":{"level6":"Btw I use Arch"}}}}}}}';

const renedered = json2html({
    json: jsonString,
    showTypeOnHover: true,
    theme: monokaiTheme,
    showTypeOnHover: true,
    // on error show error message
    onError: error => {
        console.error(error.message);
    },
});

const display = document.querySelector('#rendered-json');

display.appendChild(renedered);