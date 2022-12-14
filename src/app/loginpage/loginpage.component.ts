import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { ServiceExampleService } from '../service-example.service';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit, OnDestroy {
  constructor(private router:Router, private serv:ServiceExampleService){}
 
  [x: string]: any;
  formGroup: Observable<any> = of([{}]);
  formdata:any
  data:any
  destroyvalue$ = new Subject <boolean>
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(this.data?.email?? '' ),
      password: new FormControl(this.data?.password??'')
    })
    
  }

  submit(data:any){

   
    this.serv.logIn(data).pipe(takeUntil(this.destroyvalue$)).subscribe(submitData=>{

      localStorage.setItem('login','true')
      localStorage.setItem('email',data.email)
      
      this.router.navigate(['/dashboard']) 
      
    })
      
     
  }
  ngOnDestroy(): void {
    this.destroyvalue$.next (true)
    this.destroyvalue$.complete()
    
  }

}
