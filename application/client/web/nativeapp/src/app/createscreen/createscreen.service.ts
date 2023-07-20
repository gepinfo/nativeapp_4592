import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreatescreenService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(feature1:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/feature1' + `?jwt_token=${jwt_token}`, feature1);
    }
    (): Observable<any> {
        
    }
    feature2GpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/feature2' + `?jwt_token=${jwt_token}`);
    }
    feature2GpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/feature2' + `?jwt_token=${jwt_token}`);
    }
    feature2GpGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/feature2' + `?jwt_token=${jwt_token}`);
    }
}