import { NumberSymbol } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { ServiceExampleService } from '../service-example.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-exampletable',
  templateUrl: './exampletable.component.html',
  styleUrls: ['./exampletable.component.scss']
})
export class ExampletableComponent implements OnInit, OnDestroy{
  [x: string]: any;
  dataSource: Observable<any> = of([{}]);
  
  displayedColumns: string[] = ['no', 'name', 'cost', 'shippingAddress', 'expectedDate', 'star','fav'];

  destroyvalue$ = new Subject <boolean>


  constructor(private serv: ServiceExampleService,
    private router: Router, private dialog: MatDialog) { }

  


  ngOnInit() {
    this.serv.getcreateOrder()
    this.dataSource = this.serv.dataEvent$

  }
  editRow(dataSource: any) {
    const dialogRef = this.dialog.open(ReactiveformComponent, { data: { ...dataSource, editButton: true } })

    

    dialogRef.afterClosed().pipe(takeUntil(this.destroyvalue$)).subscribe((data: any) => {
            `Dialog result:${data}`;


    })


  }

  deleteRow(id: any) {
    this.serv.deletecreateOrder(id).pipe(takeUntil(this.destroyvalue$)).subscribe()
  }

star(data:any){
  this.serv.updateFav(data).pipe(takeUntil(this.destroyvalue$)).subscribe(favouriteButton => {
     
    window.location.reload()
  })


}
ngOnDestroy(): void {
  this.destroyvalue$.next (true)
  this.destroyvalue$.complete()
     
}

}
export interface onlineShopping {
  no: number,
  name: string;
  cost: number;
  shippingAddress: string;
  expectedDate: string;
}




