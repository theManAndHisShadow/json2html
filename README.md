# About
JSON formatter written in TypeScript.
The `json2html` function transforms a JSON string into a structured, interactive, and visually styled HTML block. This is particularly useful for visualizing complex JSON data in a clear and user-friendly way. It enables developers to explore nested structures with collapsible nodes, making it easier to inspect data without manually formatting or analyzing raw JSON.

The generated HTML block reflects the structure and hierarchy of the JSON object. Each node represents a key-value pair, with nested objects or arrays rendered as expandable/collapsible subnodes. Arrays can display their lengths in the type signature, while large arrays are grouped into manageable chunks for better performance and readability. Primitive values (strings, numbers, booleans, etc.) can optionally show their types as tooltips on hover for enhanced clarity.

This function also supports hyperlink detection, turning URL strings into clickable links. Themes can be applied to customize the appearance, with several predefined styles like `dracula`, `monokai`, or `github-dark`, as well as support for custom user-defined themes. Overall, `json2html` provides a powerful and convenient way to explore JSON data visually, directly in the browser, with options to tailor its behavior to fit specific use cases.

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

// preparing object before rendering
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

// append rendered json/object to target element at HTML
const display = document.querySelector('#rendered-json');
      display.appendChild(renedered);

// Now an interactive block with the transferred json structure will appear in the target element
```

# json2html params
| **Parameter**             | **Type**         | **Optional** | **Default Value**         | **Description**                                                                                                                                                                   |
|---------------------------|------------------|--------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `json`                   | `string`         | No           | N/A                       | JSON string to render in the HTML block.                                                                                                                                          |
| `rootName`               | `string`         | Yes          | `'json'`                  | Name of the root key of the rendered object.                                                                                                                                      |
| `renderNestedLength`     | `boolean`        | Yes          | `true`                    | If `true`, displays the length of arrays in their type signature.                                                                                                                 |
| `highlightLinks`         | `boolean`        | Yes          | `true`                    | If `true`, renders URL strings as clickable `<a>` tags.                                                                                                                           |
| `openLinksInNewTab`      | `boolean`        | Yes          | `true`                    | If `true`, opens links in a new browser tab.                                                                                                                                      |
| `collapseAll`            | `boolean`        | Yes          | `false`                   | If `true`, renders the HTML block with collapsed content initially.                                                                                                               |
| `showLevel`              | `number`         | Yes          | `1`                       | Renders all levels except the specified one as collapsed. Ignored if `collapseAll` is `true`.                                                                                     |
| `showTypeOnHover`        | `boolean`        | Yes          | `true`                    | If `true`, shows a tooltip with the type of primitive values when hovered.                                                                                                        |
| `theme`                  | `Theme`          | No           | N/A                       | Theme object for styling. Supports predefined themes (`andromeda`, `daylight`, `dracula`, `gruvbox-dark`, `gruvbox-light`, `github-light`, `github-dark`, `horizon`, `monokai`) or custom themes. |
| `onError`                | `ErrorHandler`   | Yes          | `undefined`               | Callback function for handling errors. Provides access to the `Error` instance.                                                                                                  |
| `groupBigArrayItemsBy`   | `number`         | Yes          | `100`                     | Groups large arrays into chunks of the specified size. Minimum value is `25`.                                                                                                    |
