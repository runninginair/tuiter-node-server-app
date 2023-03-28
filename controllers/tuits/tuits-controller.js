import posts from "./tuits.js";
let tuits = posts;

const TuitController = (app) => {
    // app.get('/api/tuits/:tid', findTuitByID);
    app.post('/api/tuits', createTuit);             // map URL pattern to handler function
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


const createTuit = (req, res) => {
    const newTuit = req.body;                   // retrieve data from HTTP body
    newTuit._id = (new Date()).getTime() + '';  // add _id field as a time stamp
    newTuit.likes = 0;                          // initialize likes counter
    newTuit.liked = false;                      // initialize liked flag
    tuits.push(newTuit);                        // append new tuit to tuits array
    res.json(newTuit);                          // respond with new tuit
}                                               // next chapter will store in database instead

const findTuits = (req, res) => {
    // // Alternatively we could have used req.query['type'] since
    // // it is an equivalent syntax in JavaScript.
    // const type = req.query.type
    // // const type = req.query['type']
    // if (type) {
    //     const tuitsOfType = tuits.filter(u => u.type === type)
    //     res.json(tuitsOfType)
    //     return
    // }
    res.json(tuits)
}

// const updateTuit = (req, res) => {      // handle PUT /api/tuits/:uid
//     const tuitId = req.params['tid'];   // get tuit ID from path
//     const updates = req.body;           // BODY includes updated fields
//     tuits = tuits.map((t) =>            // create a new array of users
//         t._id === tuitId ?              // if current tuit's ID matches ID we want to update
//             { ...t, ...updates } :      // merge old tuit with new updates
//             t                           // otherwise keep the old tuit
//     );
//     res.sendStatus(200);                // return OK
// }
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;     // get ID of tuit to update from path
    const updates = req.body;                   // get updates from HTTP body
    const tuitIndex = tuits.findIndex(          // find index of tuit to update
        (t) => t._id === tuitdIdToUpdate)       // in the tuits array
    tuits[tuitIndex] =                          // update the element in tuits array
        { ...tuits[tuitIndex], ...updates };    // merging/updating old tuit with updates
    res.sendStatus(200);                        // respond with success
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;     // retrieve the ID of the tuit we want to remove
    tuits = tuits.filter((t) =>                 // filter out the tuit from the tuits array
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);                        // respond with success
}

export default TuitController