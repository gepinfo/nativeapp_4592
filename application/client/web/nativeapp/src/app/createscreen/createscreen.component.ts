import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatescreenService } from './createscreen.service';





@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    feature2itemArray: any = [];
    public feature1:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        types: '',
        typess: '',
        typesss: '',
        typessss: '',
    }




    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
        this.feature1.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpGetAllValues() {
        this.createscreenService.GpGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.feature1).subscribe((data:any) => {
            this.feature1.name = ''
 	 	this.feature1.types = ''
 	 	this.feature1.typess = ''
 	 	this.feature1.typesss = ''
 	 	this.feature1.typessss = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}