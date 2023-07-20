import { Request, Response } from 'express';
import { feature1Service } from '../service/feature1Service';
import { CustomLogger } from '../config/Logger'
let feature1 = new feature1Service();

export class feature1Controller {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feature1.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpSearch');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feature1.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feature1.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feature1.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpGetNounCreatedBy');
    })}


}