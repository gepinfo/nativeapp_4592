import { Request, Response, NextFunction } from "express";
import { feature1Controller } from '../controller/feature1Controller';


export class Routes {
    private feature1: feature1Controller = new feature1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/feature1/get/search').get(this.feature1.GpSearch);
app.route('/feature1').get(this.feature1.GpGetAllValues);
app.route('/feature1').post(this.feature1.GpCreate);
app.route('/feature1/userid/created_by').get(this.feature1.GpGetNounCreatedBy);
     }

}