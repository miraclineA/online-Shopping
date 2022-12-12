import { emitDistinctChangesOnlyDefaultValue, outputAst } from '@angular/compiler';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy{



  merging:any
  destroyvalue$ = new Subject <boolean>
  

  
  constructor(private route:ActivatedRoute, private serv:ServiceExampleService , private dialog:MatDialog){}
 
  ngOnInit(): void {
    
    
     
      this.serv.getDetails( this.route.snapshot.params['id']).pipe(takeUntil(this.destroyvalue$)).subscribe(detail=>{
      this.merging = detail
    })


  


  
  }
  edit(merging:any){
    const dialogRef = this.dialog.open(ReactiveformComponent,{data:{...merging,editButton:true}})
    dialogRef.afterClosed().pipe(takeUntil(this.destroyvalue$)).subscribe((editItem:any) => {`${editItem}`})
  }

  delete(id: any) {
    this.serv.deletecreateOrder(id).pipe(takeUntil(this.destroyvalue$)).subscribe()
  }

  ngOnDestroy(): void {
    this.destroyvalue$.next (true)
    this.destroyvalue$.complete()
  }

} 

