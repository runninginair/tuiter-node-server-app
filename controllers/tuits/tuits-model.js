import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js';

const tuitsModel = mongoose                 // create mongoose model from the schema
    .model('TuitModel', tuitsSchema);

export default tuitsModel;