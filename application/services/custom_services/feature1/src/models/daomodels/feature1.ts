
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const feature1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   types: [{ type: Schema.Types.String, ref: 'feature2' }],
   typess: [{ type: Schema.Types.String, ref: 'feature2' }],
   typesss: { type: Schema.Types.String, ref: 'feature2' },
   typessss: [{ type: Schema.Types.String, ref: 'feature2' }]
})

const feature1Model = mongoose.model('feature1', feature1Schema, 'feature1');
export default feature1Model;
