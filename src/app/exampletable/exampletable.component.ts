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
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  // @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(private serv: ServiceExampleService,
    private router: Router, private dialog: MatDialog) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;

  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  ngOnInit() {
    this.serv.getcreateOrder()
    this.dataSource = this.serv.dataEvent$

  }
  editRow(dataSource: any) {
    const dialogRef = this.dialog.open(ReactiveformComponent, { data: { ...dataSource, editButton: true } })

    // const dialogRef =this.dialog.open(ExampletableComponent);

    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(`Dialog result:${data}`);


    })


  }

  deleteRow(id: any) {
    this.serv.deletecreateOrder(id).subscribe(x => {
      console.log('-------', x)

    })
  }
  // func(id: any) {
  //   this.router.navigate(['/fun', id]);
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
star(data:any){
  this.serv.updateFav(data).subscribe(x => {
    console.log('-------', x)
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



// const ELEMENT_DATA: onlineShopping[] = [
//   {id:1,name:' juice', cost: 100, shippingAddress: 'sfdg', expectedDate: '2nd,dec'},
//   {id:2,name:'straw' , cost: 22, shippingAddress: 'dfdg', expectedDate: '25,nov'},
//   {id:3,name: 'pen', cost: 499, shippingAddress: 'dcged', expectedDate: '12,dec'},
//   {id:4,name: 'pencil', cost: 455, shippingAddress: 'ddee', expectedDate: '01,jan'},
//   {id:5,name:  'brush',cost: 567, shippingAddress: 'dedd', expectedDate: '23,nov'},
// ];

