import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit{

  cards:any
  
 

  constructor(private serv:ServiceExampleService,private router:Router){}
  
  ngOnInit(): void {
    this.serv.getorderDetails().subscribe((detail:any)=>{
      
      this.cards=detail

      
    })
  }
 
  


}
