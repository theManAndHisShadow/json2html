# About
JSON formatter written in TypeScript.

# Basic usage
```js
const formattedJSON = json2html({
        json: jsonString, // some json data
      });

// now formattedJSON is ready for any DOM manipulatios
infoBox.appendChild(formattedJSON);
```