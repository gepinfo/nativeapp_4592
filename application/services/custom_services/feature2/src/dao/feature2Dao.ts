import * as mongoose from 'mongoose';
import feature2Model from '../models/daomodels/feature2';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class feature2Dao {
    private feature2 = feature2Model;
    constructor() { }
    
    public async GpCreate(feature2Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into feature2Dao.ts: GpCreate');

    let temp = new feature2Model(feature2Data);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from feature2Dao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(feature2Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into feature2Dao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.feature2.aggregate(([
                        { $match: { $and: [{ created_by: feature2Data.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from feature2Dao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}