[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeff-hykin/quik-stack/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/quik-server) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
![quik-stack-logo copy 2](https://user-images.githubusercontent.com/17692058/49397262-a845af80-f700-11e8-8b78-cae546c236ba.PNG)

### What is this?
This repo is a quick start for new projects and a mini demo of how to utilize quik-server and quik modules. It can be used to jumpstart a project with any tools/frameworks you want. It can create a react server faster than `npm init react-app`, and is more entensible and scaleable then any one initilizer command. It uses Quik Server, which is a tool that integrates the front and backend through npm quik modules. Quik Server takes advantage of the power of Node.js, Express.js and Parcel.js by both using them to enable quik-modules and by exposing them directly for developer use. Essentially quik-server enables npm packages themselves (for example socket communication using socket.io) to coordinate changes on both the frontend and backend, cutting out the majority of communication errors and boilerplate. Anyone is free (and encouraged) to make their own quik-modules. This repo lists the core quality-of-life quik-modules in `server.js`. If you decide you don't need one of those core modules, or decide you want to replace it with your own, just backspace the `server.quikAdd()` line to fully remove it.

### Why use this?
1. <u>Convenience without Compromise</u> <br><i>(Skip this part if you're comfortable setting up a Node server with a bundler and Babel)</i><br>
Quik Stack does its best to follow the "It just works" mentality. Every nitty-gritty technical option is still avalible (this isnt an iPhone), but those details wont get in your way if you only need the basics. Like what? Like enabling the frontend to import/require npm libraries, local javascript, css, images, svgs and more. Like enabling modern javascript, css, and jsx syntax as well as typescript, coffescript, sass, less, etc with all of them being automatically (in real time) compiled/transpiled/polyfilled into an optimized form that works across browsers and on older browsers. Quik Server is only able to do this because it utilizes the incredible Parcel.js bundler (which uses the Babel transpiler) to do all the heavy lifting. You can set transpiling options (how old of a browser, which browers, etc) through babel.rc files (see https://babeljs.io). You can set minification, code splitting, and bundling options through Parcel.js (see https://parceljs.org/api.html). To change the Parcel.js bundler settings, just assign them to the `server.settings.bundlerOptions` object. For example one of default settings looks like `server.settings.bundlerOptions = { outFile: absolutePath('index.html') }`.
2. <u>Modularly Integrated</u><br>
What makes Quik Stack unique is the ability to install one module that cooridnates changes between the front an back end. It enables jumping into a project, mixing and matching the modules you want, and sitting back a relaxing while they handle the setup. This really comes in handy in areas such as authentication, api changes, backend data validation, database retrevial, resumable file uploads, video streaming, and real time collaboration web services.
3. <u>Unopinionated</u><br>
If you know how to use a tool/library/framework, but you can't figure out how to use it inside quik-stack: post an issue. Aside from using an alternative to Express.js, all other backend and frontend tools should naturally work within this stack.
Whether you're (for some reason) using nothing but jQuery and ajax or if you have an Express.js server full of middleware with an Angular/React-Redux/Vue/Vuex framework with a continuous integration pipline with git-hooks into your agile board... quik-stack is made to work with what you already know. You don't need to learn any vocabulary (state-driven, MVM, MVC, MVVM, IDK, WTF), ideology, or join any religious groups to utilize quik-stack.<br>If there is any awesome existing Express.js middleware you would like to use: the `server.app` object is the express server, and you can use to setup middleware just like you would on any other project.

4. <u>The Core Modules</u><br>
Right now the default modules are quik-backend, quik-dom, and quik-history.
 - <b>quik-dom</b> enables JSX to HTML, meaning you can basically write html inside of javascript. If you use html tags, html attributes, and html children they will return/evaulate to an HTMLElement with those attributes with those children.<br>
 - <b>quik-backend</b> enables calling backend functions directly from the frontend using the `backend` object. If you name a file with ".backend.js" and export a function, then that function will be callable from the frontend. For an example of how to call the function from the frontend see `code/loginFolder/loginPage.jsx`. For an example of how to create the backend function, see `code/loginFolder/check.backend.js`. If the pattern ".backend.js" doesn't meet your naming needs, you can set `server.settings.automaticBackendImporter` to be a function that returns `true` on any filename you want to be automatically imported. For example the default is this: `server.settings.automaticBackendImporter = (fileName) => fileName.match(/\.backend\.js+$/)`
- <b>quik-history</b> is a module for using with single-page-applications. It calls the `history.loadPage` function whenever the user presses back/forward, and lets you call `history.loadPage("pageName")` youself to load new pages via user actions. e.g. `homeButton.onclick = (e)=>history.loadPage("home")`. It keeps track of adding things to the history when that new page is loaded.

### How do I get started?
Git clone this repo, run `npm start` and then go to http://localhost:3000/ to see it. The code is an example in-and-of itself. The main peices to take a look at are:
1. the files in code/
2. website.jsx
3. server.js


<br>
<br>
<br>
<br>Todo:
<br>- add middleware system to quik-backend
<br>- create quik-auth
<br>- create quik-db
<br>- create quik-deploy
