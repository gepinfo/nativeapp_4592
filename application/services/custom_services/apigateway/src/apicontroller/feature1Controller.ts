import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class feature1Controller implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/feature1/get/search', this.GpSearch);
this.router.get('/feature1', this.GpGetAllValues);
this.router.post('/feature1', this.GpCreate);
this.router.get('/feature1/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/feature1/get/searchrelationship', this.GpSearchRelationship);
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        //#@gepbankingapiroute@#
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpSearch');
        new ApiAdapter().get(Constant.FEATURE1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.FEATURE1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpCreate');
        new ApiAdapter().post(Constant.FEATURE1URL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.FEATURE1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                   let response1:any;
                                                   let response2:any;
                                                   let response2arr:any[]=[];
                                                   let finalresponse:any;
                                                   let relURL = '/feature2/get/search?name='; 
                                                   new CustomLogger().showLogger('info', 'Enter into feature1Controller.ts: GpSearch');
                                                   new ApiAdapter().get(Constant.FEATURE1URL + `${req.url}`).then((res: any) => res.response.json()).then(async result => 
                                                   {
                                                      response1 = result;
                                                      new CustomLogger().showLogger('info', 'Exit from feature1Controller.ts: GpSearch');
                                                      new CustomLogger().showLogger('info', 'Enter into feature2Controller.ts: GpSearch');
                                                      for(const data of response1[0].typessss)
                                                      {
                                                        await new ApiAdapter().get(`${Constant.FEATURE2URL}` + `${relURL}` + data).then((res: any) => res.response.json()).then(result => 
                                                        {
                                                          response2 = result;
                                                          new CustomLogger().showLogger('info', 'Exit from feature2Controller.ts: GpSearch')
                                                          response2arr.push(response2);
                                                        });
                                                      };
                                                      finalresponse = 
                                                      {
                                                        "response1" : response1,
                                                        "response2" : response2arr
                                                       }
                                                       req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                       req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                    }).catch(err => 
                                                       {
                                                         res.send(err);
                                                       });
                                            }

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    //#@gepbankinglogin@#








}

