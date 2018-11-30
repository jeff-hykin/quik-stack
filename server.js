global.server = require("quik-server")

server.settings = {
    port: 3000,
    websiteFile: "./website.jsx",
}

server.start()