import { Request, Response } from 'express';
import {feature2Dao} from '../dao/feature2Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let feature2 = new feature2Dao();

export class feature2Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into feature2Service.ts: GpCreate')
     let  feature2Data = req.body;
     feature2.GpCreate(feature2Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from feature2Service.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into feature2Service.ts: GpGetNounCreatedBy')
     let  feature2Data = { created_by: req.query.createdby };
     feature2.GpGetNounCreatedBy(feature2Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from feature2Service.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}