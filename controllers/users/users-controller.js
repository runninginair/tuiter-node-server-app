import people from './users.js'

let users = people

const UserController = (app) => {
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);       // map path pattern to handler function
    app.post('/api/users', createUser);             // map URL pattern to handler function
    app.delete('/api/users/:uid', deleteUser);      // map URL pattern to handler function
    app.put('/api/users/:uid', updateUser);
}

const findUsers = (req, res) => {
    // Alternatively we could have used req.query['type'] since
    // it is an equivalent syntax in JavaScript.
    const type = req.query.type
    // const type = req.query['type']

    if (type) {
        const usersOfType = users
            .filter(u => u.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
        .find(u => u._id === userId);
    res.json(user);
}

/**     createUser() function invoked if URL matches pattern extract new user
 * from BODY in request add an _id property with unique timestamp append new
 * user to users array respond with new user to client.
 * @param {*} req 
 * @param {*} res 
 */
const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];   // get user ID from path parameter uid
    users = users.filter(usr =>         // filter out the user
        usr._id !== userId);            // whose ID is the ID of the user we want to remove
    res.sendStatus(200);                // respond with success code
}

const updateUser = (req, res) => {      // handle PUT /api/users/:uid
    const userId = req.params['uid'];   // get user ID from path
    const updates = req.body;           // BODY includes updated fields
    users = users.map((usr) =>          // create a new array of users
        usr._id === userId ?            // if current user's ID matches ID we want to update
            { ...usr, ...updates } :    // merge old usr with new updates
            usr                         // otherwise keep the old user
    );
    res.sendStatus(200);                // return OK
}


export default UserController
