import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceExampleService } from '../service-example.service';
import{MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit,OnDestroy {

  formdata:any;
  destroyvalue$ = new Subject <boolean>
  constructor(public dialog:MatDialog, private serv:ServiceExampleService, private popup: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data:any ){}

  ngOnInit(): void {
    console.log(this.data)
    this.formdata=new FormGroup({
      no: new FormControl(this.data?.no??""),
      name:new FormControl(this.data?.name??"",Validators.required),
      cost: new FormControl(this.data?.cost??""),
      shippingAddress: new FormControl(this.data?.shippingAddress??""),
      expectedDate: new FormControl(this.data?.expectedDate??""),
    })
  }

  submit(data:any){

    
    
    this.serv.createOrder({...data,id:data['no']}).pipe(takeUntil(this.destroyvalue$)).subscribe(s=>{
      
      window.location.reload();
      
    })
    this.dialog.closeAll();
    
    
  }

  editButton(elements:any){
    this.serv.editcreateOrder(elements).pipe(takeUntil(this.destroyvalue$)).subscribe(ele=>{
      
      window.location.reload();
      
    })

    }


    
    snackbar(){
      this.popup.open('Added sucessfully', 'ThankYou')
    }

    snackbar1(){
      this.popup.open('update sucessfully','Thank You')
    }

    ngOnDestroy(): void {
      this.destroyvalue$.next (true)
      this.destroyvalue$.complete()
      
    }

}
