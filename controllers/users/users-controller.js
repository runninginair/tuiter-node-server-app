import people from './users.js'         // import the array of users. Include the extension

let users = people


const UserController = (app) => {       // use express instance app to declare HTTP GET, POST, DELETE and PUT.
    app.get('/api/users', findUsers);               // request pattern /api/users to call a function
    app.get('/api/users/:uid', findUserById);       // map path pattern to handler function
    app.post('/api/users', createUser);             // map URL pattern to handler function
    app.delete('/api/users/:uid', deleteUser);      // map URL pattern to handler function
    app.put('/api/users/:uid', updateUser);
}

/**     (A8) 3.2 Sending query parameters to a Web server
 * 
 * The previous example demonstrated retrieving data from a server. We can also send data to a server as query
 * string parameters, path parameters, or embedded in the request body. The example below demonstrates how to
 * work with query string parameters encoded at the end of a URL after a question mark (?). Query string 
 * parameters are name value pairs separated by ampersands (&). The example below refactors the findUsers
 * function to check for query strings with the type of user we want, and retrieve all of them if type is omitted.
 * 
 * The query is available in the request object (req) under the query property implemented as a map containing
 * each query variable as a key into the map. 
 * 
 * Try http://localhost:4000/api/users?type=STUDENT and confirm that the server responds with just bob.
 * Try http://localhost:4000/api/users?type=FACULTY and confirm that the server responds with alice and charlie.
 * Alternatively we could have used req.query['type'] since it is an equivalent syntax in JavaScript.
 * @param {*} req -- request
 * @param {*} res -- responce
 * @returns 
 */
const findUsers = (req, res) => {                   // function runs when /api/users requested

    // Alternatively we can use "req.query['type']"" as an equivalent syntax in JavaScript.
    const type = req.query.type
    // const type = req.query['type']

    if (type) {
        const usersOfType = users
            .filter(u => u.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)                                 // responds with JSON array of users
}

const findUserById = (req, res) => {                // function called if URL matches pattern
    const userId = req.params.uid;                  // get uid from request parameter map
    const user = users                              // find user in users array whose _id
        .find(u => u._id === userId);               // matches userId retrieved from params
    res.json(user);                                 // respond to client with user found
}

const createUser = (req, res) => {                  // function invoked if URL matches pattern
    const newUser = req.body;                       // extract new user from BODY in request
    newUser._id = (new Date()).getTime() + '';      // add an _id property with unique timestamp
    users.push(newUser);                            // append new user to users array
    res.json(newUser);                              // respond with new user to client
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];               // get user ID from path parameter uid
    users = users.filter(usr =>                     // filter out the user
        usr._id !== userId);                        // whose ID is the ID of the user we want to remove
    res.sendStatus(200);                            // respond with success code
}

const updateUser = (req, res) => {                  // handle PUT /api/users/:uid
    const userId = req.params['uid'];               // get user ID from path
    const updates = req.body;                       // BODY includes updated fields
    users = users.map((usr) =>                      // create a new array of users
        usr._id === userId ?                        // if current user's ID matches ID we want to update
            { ...usr, ...updates } :                // merge old usr with new updates
            usr                                     // otherwise keep the old user
    );
    res.sendStatus(200);                            // return OK
}


export default UserController           // exports so app.js can import
