
export interface feature1 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   types: [{ type: String, ref: 'feature2' }],
   typess: [{ type: String, ref: 'feature2' }],
   typesss: { type: String, ref: 'feature2' },
   typessss: [{ type: String, ref: 'feature2' }]
}



