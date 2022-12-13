import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { ServiceExampleService } from '../service-example.service';
import { StepperComponent } from '../stepper/stepper.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
 

  

  constructor(private dialog:MatDialog, private serv:ServiceExampleService,private router:Router ){}

idName:any
fName:any
lName:any
email:any
destroyvalue$ = new Subject <boolean>
  ngOnInit():void{
    this.email=localStorage.getItem('email')
    this.idName=this.email.split('.').join(' ').split('@',1).join(' ')
    this.fName=((this.idName.split(' ',1))[0])[0]
    this.lName=((this.idName.split(' ',2))[1])[0]
 
 }
 addonlineShopping(){
  const dialogRef =this.dialog.open(StepperComponent);


  dialogRef.afterClosed().pipe(takeUntil(this.destroyvalue$)).subscribe(result =>{
       `Dialog result:${result}`;
    
  })

 }
 logout(){
  this.router.navigate(['']);
  localStorage.clear();
   
}
searchBar(val:any){
  
  this.serv.searchItem(val)
}

addbutton=true

ngOnDestroy(): void {
  this.destroyvalue$.next (true)
  this.destroyvalue$.complete()
}
 
  

}
