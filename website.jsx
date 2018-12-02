//
// Setup Head
//
document.head = <head>
    {/* Add a title */}
    <title>Quik Demo!</title>
    {/* here's an example of how to link CDN's */}
    {/* this is the CDN from https://materializecss.com/getting-started.html  */}
    <link rel={"stylesheet"} href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    {/* heres an example of adding a style tag */}
    <style>{`/* if you wanted to add styles here you could, but I'd reccomend adding styles through code/style.scss */`}</style>
</head>

// example of how to include a local style sheet (should work with css, sass, less)
require("./code/style.scss")

//
// Setup Pages
//
let HomePage = require("./code/homePage")
let LoginPage = require("./code/loginFolder/loginPage")

// Create the page-loading function (This is what you to use you want to switch pages)
history.loadPage = function(path) {
    
    // [you can add page loading animations here if you feel like it]
    
    // Homepage
    if (path == "" || path == "home") {
        document.body = HomePage
    // Login page
    } else if (path == "login") {
        document.body = LoginPage
    // Everywhere else
    } else {
        document.body = <body>I'm not sure what page you're trying to reach :/</body>
    }
}

// load the current page after the head and all the pages are setup
let currentUrl = window.location.pathname.replace("/","")
history.loadPage(currentUrl)