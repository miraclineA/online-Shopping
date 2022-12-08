import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceExampleService } from '../service-example.service';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit{
  constructor(private router:Router, private serv:ServiceExampleService){}
  [x: string]: any;
  formGroup: Observable<any> = of([{}]);
  formdata:any
  data:any
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(this.data?.email?? '' ),
      password: new FormControl(this.data?.password??'')
    })
    
  }
  // home(){
  //   this.router.navigate(['/dashboard'])
  // }
  // logout(){
  //   this.router.navigate(['']);
  //   localStorage.clear();
  // }
  // dashboard(){
  //   this.router.navigate(['/dashboard'])
  // }
  // shopping(){
  //   this.router.navigate(['/goshopping'])
  // }
  // wishlist(){
  //   this.router.navigate(['/wishlist'])
  // }
  submit(data:any){
   
    this.serv.logIn(data).subscribe(submitData=>{
      
      localStorage.setItem('login','true')
      localStorage.setItem('email',data.email)
      
      this.router.navigate(['/dashboard']) 
      
    })
      
     
  }

}
