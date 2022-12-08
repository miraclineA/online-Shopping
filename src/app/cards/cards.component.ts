import { emitDistinctChangesOnlyDefaultValue, outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{



  merging:any
  

  
  constructor(private route:ActivatedRoute, private serv:ServiceExampleService , private dialog:MatDialog){}
  ngOnInit(): void {
    
    
     
      this.serv.getDetails( this.route.snapshot.params['id']).subscribe(detail=>{
      this.merging = detail
    })


    // deleteRow( )  {
    //   this.serv.deletecreateOrder(id).subscribe(x => {
    //     console.log('-------', x)
    //   })
    // }


  
  }
  edit(merging:any){
    const dialogRef = this.dialog.open(ReactiveformComponent,{data:{...merging,editButton:true}})
    dialogRef.afterClosed().subscribe((editItem:any) => {`${editItem}`})
  }

  delete(id: any) {
    this.serv.deletecreateOrder(id).subscribe()
  }

} 

