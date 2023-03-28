const todos = [
    { "id": 1, "title": "Learn HTML" },
    { "id": 2, "title": "Learn JavaScript" },
    { "id": 3, "title": "Learn BootStrip" },
    { "id": 4, "title": "Learn React" }
]


function TodosController(app) {
    // Responce with an array which holds a couple of objects:
    app.get('/todos', function (req, responce) {
        responce.send(todos)
    })

    // Responce with some specific todo by request its uniqe id:
    app.get('/todos/:id', function (req, responce) {
        const id = parseInt(req.params.id)
        const todo = todos.find(todo => todo.id === id)
        responce.send(todo)
    })

}

// Following statement is old syntax. still widely used today.
module.exports = TodosController


