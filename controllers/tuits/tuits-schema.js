import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        tuit: String,
        likes: Number,
        liked: Boolean,

        topic: String,
        username: String,
        handle: String,
        time: String,
        image: String,
        title: String,
        dislikes: Number,
        replies: Number, 
        retuits: Number
    },
    {
        collection: 'tuits'     // collection name where tuits are stored in tuiter database
    }
);

export default schema;