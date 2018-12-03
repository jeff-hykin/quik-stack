[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeff-hykin/quik-stack/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/quik-server) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
Web development without the boring stuff
![quik-stack-logo copy 2](https://user-images.githubusercontent.com/17692058/49395954-7ed75480-f6fd-11e8-9ba2-51bd6ff29a24.PNG)

### What is this?
This is an easy-clone setup for creating a website. It uses javascript (Node with Express.js) for the backend. Git clone this repo, run `npm start` and then go to http://localhost:3000/ to see it. The code is an example in-and-of itself. The main peices are:
1. the files in code/
2. website.jsx
3. server.js

### Why use this?
This setup is unique in that it enables powerful quik modules (imported from npm) that modify frontend and backend code at the same time. Anyone can make and include these modules. These modules are especially useful for processes like authentication that need coordination between frontend and backend. Right now the default modules are quik-backend, quik-dom, and quik-history. <br>
You can remove any of the default modules you don't care about (just backspace the `server.quikAdd()` line), the quik-server will still work without them. Quik stack was created to have nothing that is extra, and nothing that is missing. The default modules are designed as a toolbox you can grab from rather than a framework that you have to work inside of.

### What is this built on?
The core of this stack is quik-server, which is built on Node.js, Express.js, and Parcel.js.

#### What are some of the plug-in features?
quik-dom enables JSX to HTML, meaning you can basically write html inside of javascript.<br>
quik-backend enables calling backend functions directly from the frontend using the `backend` object. If you name a file with ".backend.js" and export a function, then that function will be callable from the frontend. See `code/loginFolder/loginPage.jsx` for an example<br>
quik-history is a module for using with single-page-applications. It calls the loadPage function whenever the user presses back/forward, and it also keeps track of adding things to the history when a new page is loaded.
<br>
<br>
<br>
<br>Todo:<br>
- add middleware to quik-backend
- create quik-auth
- create quik-db
- create quik-deploy
