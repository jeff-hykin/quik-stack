function afterLoginSubmit(serverResponse) {
    alert(serverResponse)
}

module.exports = <div style={{ width: "100vw", height: "100vh", display: "flex", alignContent: "center", justifyContent: "center" }}>
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">Login</span>
            {usernameElement = <input type="text"     placeholder="username"/>}
            {passwordElement = <input type="password" placeholder="password"/>}
        </div>
        <div class="card-action">
            <a href="#" onclick={e=>backend.loginFolder.check({username: usernameElement.value, password: passwordElement.value}).then(afterLoginSubmit)}>
                Submit
            </a>
        </div>
    </div>
</div>
