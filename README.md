[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeff-hykin/quik-stack/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/quik-server) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
![quik-stack-logo copy 2](https://user-images.githubusercontent.com/17692058/49397262-a845af80-f700-11e8-8b78-cae546c236ba.PNG)


## How do I get this running?

- If you're unfamilar with npm, follow `documentation/setup.md` for an automated setup
- If you've already got a npm environment, `npm install quik-server` and then follow the examples below

## Copy-Paste-Go code
1. Create the following two files (server.js and website.jsx)
2. Run `npm install -s quik-server;node server.js` in the same directory where you created those files
3. Open 'http://localhost:3000' in your browser to see quik-stack at work
##### server.js
```javascript
let app = require("quik-server")

app.settings = { websiteFile: "./website.jsx" }
app.start()
```
##### website.jsx
```javascript
document.body.style = `
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 30pt; 
    font-family: sans-serif;
`
document.body.innerHTML = `
    Hello World!
`
```
<br>
<br>

## How can this be used?
### 1. Use it with Express.js Middleware
##### server.js
```javascript
let app = require("quik-server")

// adding cors support (see https://github.com/expressjs/cors)
let cors = require('cors')
app.use(cors())

app.start()
```
##### website.jsx
```javascript
document.body.innerHTML = `
    Hello World!
`
```
<br>
<br>

### 2. Add Quik Modules to get additional functionality
##### server.js
```javascript
let app = require("quik-server")

app.quikAdd("quik-dom")

app.settings = { websiteFile: "./website.jsx" }
app.start()
```
##### website.jsx
```javascript
document.body = <body>
    Hello World!
</body>
```
<br>
<br>

### 3. Import modules on the frontend
##### server.js
```javascript
let app = require("quik-server")
app.start()
```
##### website.jsx
```javascript
let $ = require("jquery")
$(document.body).append("Hello World!")
```
<br>
<br>

### 4. Use app.settings for centralized options 
##### server.js
```javascript
let app = require("quik-server")

app.settings = {
    // default settings (all are optional)
    host: "localhost",
    port: 3000,
    // server can also be https (see: https://stackoverflow.com/questions/11744975/enabling-https-on-express-js)
    server: require('http').createServer(app), 
    websiteFile: "./website.jsx",
    codeFolder: "./main",
    computerGeneratedFolder: "./computerGeneratedCode",
    bundlerOptions: {}, // see https://parceljs.org/api.html for options
    afterSystemMiddlewareSetup: () => {
        // anything you want to do
    },
    afterSystemFrontendSetup: () => {
        // anything you want to do
    },
    afterSystemBundlerSetup: () => {
        // anything you want to do
    },
    afterServerStarted: () => {
        // anything you want to do
    },
}
app.start()
```

### What is Quik Stack?
This repo is a quick start for new projects and a mini demo of how to utilize quik-server and quik modules.

### How does it do this stuff?
Quik-server is built on the best tools; Express.js and Parcel.js (which uses Babel7 and lots of other great tools). Those libraries are the ones that do the real heavy lifting, quik-server pulls them together and adds the needed framework for quik-modules.

### Why use this?
1. <u>Convenience (without the downside)</u>
Typically Setting up a modern Javascript project is hard, this fixes that without restricting customization. What's even harder is maintaining a modern Javascript app (see #2).
2. <u>Modules Without Boilerplate</u><br>
What makes Quik Stack unique is the ability to install one module that cooridnates changes between the front an back end. It makes things easy to add, remove, test, and delete. It cuts out many of the API/communication errors. This really comes in handy in areas such as authentication, 3rd party api changes, backend data validation, database retrevial, resumable file uploads, video streaming, and real time collaboration web services.
3. <u>Unopinionated</u><br>
There is no style of coding you have to adopt to use this. So long as you use modern Javascript, the rest is up to you.
4. <u>Great Core Modules</u><br>
Right now the default modules are quik-backend, quik-dom, and quik-history.
 - <b>quik-dom</b> enables JSX to HTML, meaning you can basically write html inside of javascript. If you use html tags, html attributes, and html children they will return/evaulate to an Javascript HTMLElement with those attributes with those children.<br>
 - <b>quik-backend</b> enables calling backend functions directly from the frontend using the `quik.backend` object. If you name a file with ".backend.js" and export a function, then that function will be callable from the frontend. For an example of how to call the function from the frontend see `main/loginFolder/loginPage.jsx`. For an example of how to create the backend function, see `main/loginFolder/check.backend.js`. If the pattern ".backend.js" doesn't meet your naming needs, you can set `app.settings.automaticBackendImporter` to be a function that returns `true` on any filename you want to be automatically imported. For example the default is this: `app.settings.automaticBackendImporter = (fileName) => fileName.match(/\.backend\.js$/)`
- <b>quik-history</b> is a module for using with SPA's (see https://en.wikipedia.org/wiki/Single-page_application). It lets you set a `history.loadPage` function and it calls `history.loadPage` function (with the new url as an argument) whenever the user presses back/forward. It lets you call `history.loadPage("pageName")` yourself to load new pages via user actions. e.g. `homeButton.onclick = (e)=>history.loadPage("home")`. It keeps track of adding things to the history when that new page is loaded. See `website.jsx` for an example of how to setup the `history.loadPage` function. 

### How do I get started?
Git clone this repo, run `npm start` and then go to http://localhost:3000/ to see it. The code is an example in-and-of itself. The main peices to take a look at are:
1. the files in main/
2. website.jsx
3. server.js


<br>
<br>
<br>
<br>Todo:
<br>- add middleware system to quik-backend
<br>- create quik-db
<br>- create quik-auth
<br>- create quik-deploy
<br>- create quik-components
<br>- create quik-images
<br>- create quik-upload
<br>- create quik-vids