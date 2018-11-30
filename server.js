global.server   = require("quik-server")

// plug-ins
let quikDom     = server.quikAdd("quik-dom")     // this does the JSX magic
let quikBackend = server.quikAdd("quik-backend") // this does the backend/api magic
let quikHistory = server.quikAdd("quik-history") // this does the history.loadPage magic

server.settings = {
    port: 3000,
    websiteFile: "./website.jsx",
    middlewareSetup: () => {
        quikBackend(server)
    }
}

server.start()