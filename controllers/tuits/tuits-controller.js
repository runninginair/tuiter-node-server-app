// import posts from "./tuits.js";
// let tuits = posts;

// import * as tuitsDao from '../../tuits/tuits-dao.js'    // import the dao
import * as tuitsDao from '../tuits/tuits-dao.js';


const TuitController = (app) => {
    // app.get('/api/tuits/:tid', findTuitByID);
    app.post('/api/tuits', createTuit);             // map URL pattern to handler function
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


// const createTuit = (req, res) => {
//     const newTuit = req.body;                   // retrieve data from HTTP body
//     newTuit._id = (new Date()).getTime() + '';  // add _id field as a time stamp
//     newTuit.likes = 0;                          // initialize likes counter
//     newTuit.liked = false;                      // initialize liked flag
//     tuits.push(newTuit);                        // append new tuit to tuits array
//     res.json(newTuit);                          // respond with new tuit
// }                                               // next chapter will store in database instead
const createTuit = async (req, res) => {            // now it's an asynchronous function
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';     // ID created by database instead
    newTuit.likes = 0;
    newTuit.liked = false;
    // tuits.push(newTuit);                         // not using array anymore
    const insertedTuit = await tuitsDao             // actual tuit inserted in database
        .createTuit(newTuit);                       // with DAO's createTuit
    res.json(insertedTuit);                         // respond with actual inserted tuit
}

// const findTuits = (req, res) => {
//     res.json(tuits)
// }
const findTuits = async (req, res) => {             // now it's asynchronous function
    const tuits = await tuitsDao.findTuits()        // retrieve tuits from database
    res.json(tuits);
}

// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;     // get ID of tuit to update from path
//     const updates = req.body;                   // get updates from HTTP body
//     const tuitIndex = tuits.findIndex(          // find index of tuit to update
//         (t) => t._id === tuitdIdToUpdate)       // in the tuits array
//     tuits[tuitIndex] =                          // update the element in tuits array
//         { ...tuits[tuitIndex], ...updates };    // merging/updating old tuit with updates
//     res.sendStatus(200);                        // respond with success
// }
const updateTuit = async (req, res) => {            // now it's an asynchronous function
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(           // no longer using array
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] =                           // no longer using array
    //     { ...tuits[tuitIndex], ...updates };
    const status = await tuitsDao                   // status reports success or failure
        .updateTuit(                                // to update document in database
            tuitdIdToUpdate,
            updates
        );
    res.json(status);                               // respond with status object
}

// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;     // retrieve the ID of the tuit we want to remove
//     tuits = tuits.filter((t) =>                 // filter out the tuit from the tuits array
//         t._id !== tuitdIdToDelete);
//     res.sendStatus(200);                        // respond with success
// }
const deleteTuit = async (req, res) => {            // now it's an asynchronous function
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao                   // status reports success or failure
        .deleteTuit(tuitdIdToDelete);               // to delete record from database
    // tuits = tuits.filter(t =>                    // no longer using array
    //     t._id !== tuitdIdToDelete);
    res.json(status);                               // respond with status object
}


export default TuitController