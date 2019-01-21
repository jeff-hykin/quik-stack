let app   = require("quik-server")

// plug-ins
let quikBackend     = app.quikAdd("quik-backend")     // this does the backend/api magic
let quikDom         = app.quikAdd("quik-dom")         // this does the JSX magic
let quikPageManager = app.quikAdd("quik-history")     // this adds the history.loadPage to the frontend

// Here are some css frameworks (only comment-in one at a time though)
// let quikMaterialize = app.quikAdd("quik-materialize") // this adds the materialize-css framework to the frontend
// let quikBootstrap   = app.quikAdd("quik-bootstrap")   // this adds the bootstrap-css framework to the frontend

app.settings = {
    // default settings (all are optional)
    host: 'localhost',
    port: 3000,
    websiteFile: "./website.jsx",
    codeFolder: "./code",
    computerGeneratedFolder: "./computer-generated-code",
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