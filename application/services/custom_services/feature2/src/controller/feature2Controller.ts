import { Request, Response } from 'express';
import { feature2Service } from '../service/feature2Service';
import { CustomLogger } from '../config/Logger'
let feature2 = new feature2Service();

export class feature2Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feature2.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into feature2Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from feature2Controller.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    feature2.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into feature2Controller.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from feature2Controller.ts: GpGetNounCreatedBy');
    })}


}