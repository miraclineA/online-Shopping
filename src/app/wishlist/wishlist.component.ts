import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import { ServiceExampleService } from '../service-example.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html', 
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  dataSource: Observable<any> = of([{}]);
  displayedColumns: string[] = ['no', 'name', 'cost', 'shippingAddress', 'expectedDate'];

  constructor(private serv:ServiceExampleService, private router:Router){}
  ngOnInit() {
    this.dataSource = this.serv.dataEvent$
    .pipe(map((n:any)=>{
      console.log('----',n)
      return(n.filter((a:any)=>a.selected))
  }))
  
    // this.serv.orderDetails().pipe()
    
  }
  logout(){
    this.router.navigate(['']);
    localStorage.clear();
  }
  dashboard(){
    this.router.navigate(['/dashboard'])
  }
  shopping(){
    this.router.navigate(['/goshopping'])
  }
  wishlist(){
    this.router.navigate(['/wishlist'])
  }
 
}

export interface onlineShopping {
  no: number,
  name: string;
  cost: number;
  shippingAddress: string;
  expectedDate: string;
}

