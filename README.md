# quik-stack
A new way to do webdev

This is an easy-clone boilerplate for creating a website using quik-server

### Why use this?
Its designed to get out of your way
1. You can write backend functions and call them without ever touching an api
2. You're not required to have (html, css, js) for a webpage, jsx is integrated and can do it all
3. This works with all the old javascript/css/jquery tricks all over the internet. Quik-stack isnt a framework, its a toolbox that makes things magnitudes easier without making you change your entire way of thinking.

### Whats an example?
Lets say you want to have a page that lists out a bunch of video games from a SQL database
<br>code/getVideoGameList.backend.js
```javascript
module.exports = () => {
    // SQL stuff here probably would use a library
    return videoGame.query.all()
}
```
code/videoGameUI.jsx
```javascript
module.exports = page = <div>
    <span>Loading...</span>
</div>
backend.getVideoGameList().then((result)=>{
    // remove the loading
    page.children = []
    // add each as an element
    for (let each of result) {
        page.add(<h4>{each.title}</h4>,<p>{each.content}</p>)
    }
})
```
Thats all that would be needed (excluding the database code). The server uses the filename to generate the frontend function so no api or serializer is ever needed. If the backend function is in a folder ex: code/videoGames/getVideoGameList.backend.js, just call it on frontend like this `backend.videoGames.getVideoGameList()` and this should work for any amount of nesting.

#to-do
- add a tool for managing history
- add a seperate quik-tool for managing logins/permissions
- add a seperate quik-tool for databases