import { Component, OnInit, ViewChild } from '@angular/core';
import { Createfeature2Service } from './createfeature2.service';





@Component({
  selector: 'app-createfeature2',
  templateUrl: './createfeature2.component.html',
  styleUrls: ['./createfeature2.component.scss'],
})

export class Createfeature2Component implements OnInit {
    public feature2:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private createfeature2Service: Createfeature2Service,
    ) { }

    ngOnInit() {
        this.feature2.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createfeature2Service.GpCreate(this.feature2).subscribe((data:any) => {
            this.feature2.name = ''
 	 	this.feature2.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}