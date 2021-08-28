let app   = require("quik-server")

// plug-ins
app.quikAdd("quik-backend")         // this does the backend/api magic
app.quikAdd("quik-dom")             // this does the JSX magic
app.quikAdd("quik-history")         // this adds the history.loadPage to the frontend
app.quikAdd("quik-module-template") // this is for developing/testing new quik modules

// Here are some css frameworks (only comment-in one at a time though)
// app.quikAdd("quik-materialize") // this adds the materialize-css framework to the frontend
// app.quikAdd("quik-bootstrap")   // this adds the bootstrap-css framework to the frontend

app.settings = {
    // default settings (all are optional)
    host: "localhost",
    port: 3000,
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
        console.log(`Server running on http://${app.settings.host}:${app.settings.port}`)
    },
}
app.start()