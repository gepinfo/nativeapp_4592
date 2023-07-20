import { Request, Response, NextFunction } from "express";
import { feature2Controller } from '../controller/feature2Controller';


export class Routes {
    private feature2: feature2Controller = new feature2Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/feature2').post(this.feature2.GpCreate);
app.route('/feature2/userid/created_by').get(this.feature2.GpGetNounCreatedBy);
     }

}