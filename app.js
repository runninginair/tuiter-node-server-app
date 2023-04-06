/**     2.5 Creating an HTTP Web server
 * 
 * The following app.js implements an HTTP server that responds Hello World!
 * when the server receives an HTTP request at the URL http://localhost:4000/hello.
 * You can copy and paste the URL in a browser to send the HTTP request and the
 * browser will render the response from the server.
 * 
 * The require() function is equivalent to the import keyword and loads a library
 * into the local source.
 * 
 * The express() function call creates an instance of the express library and
 * assigns it to local constant "app".
 * 
 * Developers use the "app" instance to configure the server on what to do when
 * various types of requests are received.
 * 
 * For instance the example below uses the app.get() function to configure an
 * HTTP handler by mapping the URL pattern '/hello' to a function that handles
 * the HTTP request.
 */

/**     2.7 Configuring Node.js to use ES6
 * 
 * So far we've been using the keyword "import" to load ES6 modules in our
 * React Web applications, but in app.js we used require instead to accomplish
 * the same thing. Since Node version 12, ES6 syntax is supported by configuring
 * the package.json file and adding a new "type" property with value "module" as
 * shown below in the highlighted text (See pachage.json line 2)
 * 
 */

// const express = require('express')
import express from 'express';
import cors from 'cors';        // import the new cors (Cross Origin Resource Sharing) library
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";

// A-9 3.1 Installing and connecting to a MongoDB database
import mongoose from 'mongoose';                        // load the mongoose library
// mongoose.connect('mongodb://localhost:27017/tuiter');   // connect to the tuiter database


/**     Mongo Atlas Cluster-name: ClusterTuits
 *      Username: runninginair
 *      Password: CXkRTnHZ2Z45ZBW4
 * 
 *  mongodb+srv://runninginair:<password>@clustertuits.eqbxi3p.mongodb.net/?retryWrites=true&w=majority
 * 
 *  Replace <password> with the password for the runninginair user. Ensure any option params are URL encoded.
 * 
 */
const process = ProcessingInstruction;
// process.env.DB_CONNECTION_STRING = "mongodb+srv://runninginair:CXkRTnHZ2Z45ZBW4@clustertuits.eqbxi3p.mongodb.net/?retryWrites=true&w=majority";
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
// mongoose.connect(CONNECTION_STRING);
// const DB_CONNECTION_STRING = "mongodb+srv://runninginair:CXkRTnHZ2Z45ZBW4@clustertuits.eqbxi3p.mongodb.net/?retryWrites=true&w=majority";
// const CONNECTION_STRING = DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
// mongoose.connect(CONNECTION_STRING);

mongoose.connect(
    "mongodb+srv://runninginair:CXkRTnHZ2Z45ZBW4@clustertuits.eqbxi3p.mongodb.net/?retryWrites=true&w=majority"
);


const app = express();

app.use(cors());                // configure cors right after instantiating express
app.use(express.json());        // parse JSON from HTTP request body

TuitController(app);
HelloController(app);
UserController(app);


/**     7.1 Configuring Node applications to run in a remote server
 * 
 * We're going to host our Node HTTP server on a remote server where we can't use port 4000.
 * Instead remote servers declare the proper port to use in an environment variable called PORT
 * available from Node using process.env.PORT. Refactor app.js so that it uses the PORT
 * environment variable if available, or uses 4000 otherwise when running locally on our machines.
 */
app.listen(process.env.PORT || 4000);


/** The following part are demos of online course cs5610-6.


const TodosController = require('./todos_demo/todos-controller')
const MathController = require('./math_demo/math-controller')
const ProfileController = require('./profile_demo/profile-controller')


// req: request     res: responce
app.get('/', function (req, res) {
    res.send('Hello Node.js world~')
})

app.get('/hello/:message', function (req, res) {
    const message = req.params.message
    res.send(`Hello ${message} from another ending point~`)
})

// // Following blocks are moved to todos_demo:
// // Addition sample
// app.get('/add/:a/:b', function (req, res) {
//     const a = parseInt(req.params.a)
//     const b = parseInt(req.params.b)
//     res.send(`${a} + ${b} = ${a + b}`)
// })
MathController(app)

// // Responce with an object:
// app.get('/profile/:name', function(req, res) {
//     const profile = {
//         "name": req.params.name,
//         "age": 20,
//         "salary": 10000
//     }
//     res.send(profile)
// })
ProfileController(app)

// // Following blocks are moved to todos_demo:
// const todos = [
//     { "id": 1, "title": "Learn HTML"},
//     { "id": 2, "title": "Learn JavaScript"},
//     { "id": 3, "title": "Learn BootStrip"},
//     { "id": 4, "title": "Learn React"}
// ]

// // Responce with an array which holds a couple of objects:
// app.get('/todos', function(req, responce) {
//     responce.send(todos)
// })

// // Responce with some specific todo by request its uniqe id:
// app.get('/todos/:id', function(req, responce) {
//     const id = parseInt(req.params.id)
//     const todo = todos.find(todo => todo.id === id)
//     responce.send(todo)
// })
TodosController(app)


app.listen(3000)

 */