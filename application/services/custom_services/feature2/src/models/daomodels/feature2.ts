
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const feature2Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   description: { type: String }
})

const feature2Model = mongoose.model('feature2', feature2Schema, 'feature2');
export default feature2Model;
