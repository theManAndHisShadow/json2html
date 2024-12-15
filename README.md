# About
JSON formatter written in TypeScript.

# Basic usage
```js
// importing theme form 'themes/' folder
import monokaiTheme from "./libs/json2html/themes/monokai.theme.js"

// importing lib function
import json2html from "./libs/json2html/json2html.min.js";

// some object for example
const userFromResponse =  {
    lastOnline: "15.12 at 12:10", 
    username: "peterPumpking69", 
    role: "moderator", 
    owns: [1, 2, 3, 5, 8]
};

// preparing to render
const jsonString = JSON.stringify(userFromResponse);

// render using 'json2html' lib function
const renedered = json2html({
    json: jsonString,           // target json string
    showTypeOnHover: true,      // show value type on mouse hover
    theme: monokaiTheme,        // pass theme from 'themes/' folder

    onError: error => {         // when error occurs - show error message
        console.error(error.message);
    },
});

// append rendered josn/object to target element at HTML
const display = document.querySelector('#rendered-json');
      display.appendChild(renedered);
```