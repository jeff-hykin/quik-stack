// 
// Head
// 
document.head.add( 
    // add materialize css
    <link rel={"stylesheet"} href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>,
    <style>{`
        .center-children, body {
            width : 100vw;
            height : 100vh;
            display : flex;
            flex-direction : column;
            align-content : center;
            align-items : center;
            justify-content : center;
            justify-items : center;
        }
    `}</style>
)

// 
// Pages
//
window.homePage  = require("./code/homePage")
window.loginPage = require("./code/loginFolder/loginPage")
history.loadPage = function(path) {
    // Homepage
    if (path == "/" || path == "/homePage") {
        document.body = <body>{homePage}</body>
    // Login page
    } else if (path == "/login") {
        document.body = <body>{loginPage}</body>
    // Everywhere else
    } else {
        document.body = <body>Error Unknown route :/</body>
    }
}
history.loadPage(window.location.pathname)