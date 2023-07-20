import { Request, Response } from 'express';
import {feature1Dao} from '../dao/feature1Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let feature1 = new feature1Dao();

export class feature1Service {
    
    constructor() { }
    
    public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into feature1Service.ts: GpSearch')
     let  feature1Data = req.query;
     feature1.GpSearch(feature1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from feature1Service.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into feature1Service.ts: GpGetAllValues')
     
     feature1.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from feature1Service.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into feature1Service.ts: GpCreate')
     let  feature1Data = req.body;
     feature1.GpCreate(feature1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from feature1Service.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into feature1Service.ts: GpGetNounCreatedBy')
     let  feature1Data = { created_by: req.query.createdby };
     feature1.GpGetNounCreatedBy(feature1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from feature1Service.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}