import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { ServiceExampleService } from '../service-example.service';
import { StepperComponent } from '../stepper/stepper.component';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  // dataSource:Observable<any>= of([{}]); 

  constructor(private dialog:MatDialog, private serv:ServiceExampleService,private router:Router ){}
idName:any
fName:any
lName:any
email:any
  ngOnInit():void{
    this.email=localStorage.getItem('email')
    this.idName=this.email.split('.').join(' ').split('@',1).join(' ')
    this.fName=((this.idName.split(' ',1))[0])[0]
    this.lName=((this.idName.split(' ',2))[1])[0]
 
 }
 addonlineShopping(){
  const dialogRef =this.dialog.open(StepperComponent);


  dialogRef.afterClosed().subscribe(result =>{
       `Dialog result:${result}`;
    
  })

 }
 logout(){
  this.router.navigate(['']);
  localStorage.clear();
  // window.location.reload()
}
searchBar(val:any){
  
  this.serv.searchItem(val)
}


  // editRow(){
  //   this.serv.createOrder({
  //   id:9,
  //     no:8,
  //     name:"orange",
  //      cost: 80,
  //       shippingAddress: "hjkk",
  //        expectedDate: "xyz",
    
        

  //   }

  //   ).subscribe((data:any) =>{console.log('--data---',data)})
  // }

  

}
