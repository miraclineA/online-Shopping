import { NumberSymbol } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
export class ExampletableComponent implements OnInit{
  [x: string]: any;
  dataSource: Observable<any> = of([{}]);
  
  displayedColumns: string[] = ['no', 'name', 'cost', 'shippingAddress', 'expectedDate', 'star','fav'];

  constructor(private serv: ServiceExampleService,
    private router: Router, private dialog: MatDialog) { }
  


  ngOnInit() {
    this.serv.getcreateOrder()
    this.dataSource = this.serv.dataEvent$

  }
  editRow(dataSource: any) {
    const dialogRef = this.dialog.open(ReactiveformComponent, { data: { ...dataSource, editButton: true } })

    // const dialogRef =this.dialog.open(ExampletableComponent);

    dialogRef.afterClosed().subscribe((data: any) => {
            `Dialog result:${data}`;


    })


  }

  deleteRow(id: any) {
    this.serv.deletecreateOrder(id).subscribe()
  }

star(data:any){
  this.serv.updateFav(data).subscribe(favouriteButton => {
    // console.log('-------', favouriteButton) 
    window.location.reload()
  })

}

}
export interface onlineShopping {
  no: number,
  name: string;
  cost: number;
  shippingAddress: string;
  expectedDate: string;
}




