import * as mongoose from 'mongoose';
import feature1Model from '../models/daomodels/feature1';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class feature1Dao {
    private feature1 = feature1Model;
    constructor() { }
    
    public async GpSearch(feature1Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into feature1Dao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(feature1Data).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.feature1.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from feature1Dao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into feature1Dao.ts: GpGetAllValues');

    

    
    
    
    this.feature1.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from feature1Dao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(feature1Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into feature1Dao.ts: GpCreate');

    let temp = new feature1Model(feature1Data);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from feature1Dao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(feature1Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into feature1Dao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.feature1.aggregate(([
                        { $match: { $and: [{ created_by: feature1Data.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from feature1Dao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}