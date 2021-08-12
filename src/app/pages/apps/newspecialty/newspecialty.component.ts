import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { UserWService } from '../../../core/services/user-w.service';
import { DataApiService } from '../../../core/services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  '../../../core/file-picker.adapter';
import { FilePickerComponent } from '../../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../../assets/file-picker/src/lib/file-preview.model';
import { ValidationError } from '../../../../assets/file-picker/src/lib/validation-error.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SpecInterface } from '../../../core/models/spec-interface';  
@Component({
  selector: 'newspecialty',
  templateUrl: './newspecialty.component.html',
  styleUrls: ['./newspecialty.component.scss']
})
export class NewspecialtyComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  newSpecialty: FormGroup; // type validation form
    submit: boolean;
idspec=0;
      typesubmit: boolean;
 adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  constructor(    
public formBuilder: FormBuilder,
    private http: HttpClient,
    public _uw:UserWService, 
   public location: Location,
    public router: Router,
    private dataApiService: DataApiService


  	) { }
   public isError = false;
    public specs:SpecInterface;
    public spec:SpecInterface;
  public pagoImage:any[]=[];
  public images:any[]=[];

  
  sendSpec(){
      this.typesubmit = true;
      if (this.newSpecialty.invalid) {
         this._uw.errorFormAddSpec=true;
      return;
        } 
      this._uw.errorFormAddSpec=false;
      // this.user = this.authService.getCurrentUser();
      // let val=(this.user.id).toString();
      this.spec = this.newSpecialty.value;
      this.idspec=this.aleatorio(10000,99999);
      let idspecString = this.idspec.toString();
      this.spec.idspec=idspecString;
      this.spec.filterStatus=true;
      return this.dataApiService.saveSpec(this.spec)
        .subscribe(
             spec => this.router.navigate(['/settingsapp'])
        );
  }    
      public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
    
  public okPago(){
   // let id = this._uw.order.id;
 //console.log("id disponible para enviar: "+id);
   // this.updateOrder();
    }



 get type() {
    return this.newSpecialty.controls;
  }

  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
  }




  ngOnInit() {this._uw.images=[];
  this.breadCrumbItems = [];
      this.newSpecialty = this.formBuilder.group({
      name: ['', [Validators.required]]
        });
     // this.ngFormSendPago = this.formBuilder.group({
     // npedido: ["",[Validators.required]]
    //  });
  }


    onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
   // console.log(e);
  // console.log(this.myFiles);
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    
    file.fileName=""+file.fileName;
    this.myFiles.push(file);
    // this.images.push(file.fileName);

  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }

}