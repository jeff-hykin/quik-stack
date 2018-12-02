let usernameElement, passwordElement

async function onclick(eventObject) {
    // call the function inside check.backend.js and give it the username and password
    let backendResponse = await backend.loginFolder.check({username: usernameElement.value, password: passwordElement.value})
    alert(backendResponse)
}

module.exports = <body>
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">Login</span>
            {usernameElement = <input type="text"     placeholder="username"/>}
            {passwordElement = <input type="password" placeholder="password"/>}
        </div>
        <div class="card-action">
            <a onclick={onclick}>
                Submit
            </a>
        </div>
    </div>
</body>