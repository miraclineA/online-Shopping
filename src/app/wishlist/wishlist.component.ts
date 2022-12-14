import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import { onlineShopping } from '../model';
import { ServiceExampleService } from '../service-example.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  dataSource: Observable<onlineShopping[]> = of([]);
  displayedColumns: string[] = ['no', 'name', 'cost', 'shippingAddress', 'expectedDate'];

  constructor(private serv: ServiceExampleService, private router: Router) { }
  ngOnInit() {
    this.serv.getcreateOrder()
    this.dataSource = this.serv.dataEvent$
      .pipe(map((mapping: any) => {

        return (mapping.filter((filtering: any) => filtering.selected))
      }))


  }


}



