global.server   = require("quik-server")

// plug-ins
let quikBackend     = server.quikAdd("quik-backend")     // this does the backend/api magic
let quikDom         = server.quikAdd("quik-dom")         // this does the JSX magic
let quikPageManager = server.quikAdd("quik-history")     // this adds the history.loadPage to the frontend

// Here are some css frameworks (only comment-in one at a time though)
// let quikMaterialize = server.quikAdd("quik-materialize") // this adds the materialize-css framework to the frontend
// let quikBootstrap   = server.quikAdd("quik-bootstrap")   // this adds the bootstrap-css framework to the frontend

server.settings = {
    port: 3000,
    websiteFile: "./website.jsx",
    middlewareSetup: () => {
        quikBackend(server)
    }
}

server.start()