# VAMTIGER Bash
[VAMTIGER Get Stylesheet links](https://github.com/vamtiger-project/vamtiger-get-stylesheet-links) will return a list of linked stylesheets for defined HTML document text.

## Installation
[VAMTIGER Get Stylesheet links](https://github.com/vamtiger-project/vamtiger-get-stylesheet-links) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-stylesheet-links
```
or
```bash
yarn add vamtiger-get-stylesheet-links
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get Stylesheet links](https://github.com/vamtiger-project/vamtiger-get-stylesheet-links):
```javascript
import getStylesheetLinks from 'vamtiger-get-stylesheet-links';
```
or
```javascript
const getStylesheetLinks = require('vamtiger-get-stylesheet-links').default;
```

[VAMTIGER Get Stylesheet links](https://github.com/vamtiger-project/vamtiger-get-stylesheet-links) will return a list of linked stylesheets for defined HTML document text.:
```javascript
const getStylesheetLinks = require('vamtiger-get-stylesheet-links').default;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="some/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>`;
const bodyInnerHtml = getStylesheetLinks({ html }); // ['<link href="some/stylesheet/link/index.css" rel="stylesheet">']
```