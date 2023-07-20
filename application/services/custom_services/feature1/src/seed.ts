import * as mongoose from 'mongoose';
import { feature1Schema } from './models/daomodels/feature1';

const feature1Model = mongoose.model('feature1', feature1Schema);

export class Seed {

    constructor() {

    }

    

}
