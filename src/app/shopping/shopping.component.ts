import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Observable, of, Subject, takeUntil } from 'rxjs';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, OnDestroy{

  cards:any
  destroyvalue$ = new Subject <boolean>
  
  
  
 

  constructor(private serv:ServiceExampleService,private router:Router){}

 
  
  ngOnInit(): void {
    this.router.events.pipe(filter(navigation=>navigation instanceof NavigationStart)).pipe(takeUntil(this.destroyvalue$)).subscribe((activeroute: any) => {

      if(activeroute.url.includes('orderList')){
        this.cards = this.serv.getorderDetails()
        
      }
      else if(activeroute.url.includes('grocery')){
        this.cards = this.serv.getgroceryItem() 
      }else if(activeroute.url.includes('electronics')){
        this.cards = this.serv.getelectronicsItem()
      }else if(activeroute.url.includes('homeappliance')){
        this.cards = this.serv.gethomeAppliance()
      }else{
        activeroute.navigate(['/goshopping'])
      }
      
      
  });
    



    }
    ngOnDestroy(): void {
      this.destroyvalue$.next (true)
      this.destroyvalue$.complete()
    }
  }
 


 
  



 



