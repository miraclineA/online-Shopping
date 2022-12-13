import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs'
import { onlineShopping } from './model';
const cores = require('cors')

@Injectable({
  providedIn: 'root'

})



export class ServiceExampleService {
  [x: string]: any;
  
  API_URL=' http://localhost:3000/onlineShopping'
  APPLICATION_URL='http://localhost:3000/orderList'
  grocery_URL='http://localhost:3000/grocery'
  electronics_URL=' http://localhost:3000/electronics'
  homeAppliance_URL='http://localhost:3000/homeappliance'

  countryData: any;

  private dataSubject$: Subject<onlineShopping[]>=new Subject();
  dataEvent$ = this.dataSubject$.asObservable();

  data:onlineShopping[]=[]
  
  
  
  
  

  constructor(private http:HttpClient ,  
    ) {}

    
 





  getcreateOrder(){
     this.http.get(this.API_URL).subscribe((val:any)=>{
      console.log('----val',val)
      this.dataSubject$.next(val)
      
     this.data=val
    })
  }
  createOrder(data:any){
    console.log('----data----',data);
    return this.http.post(this.API_URL,data)
  }
  editcreateOrder(data:any){
    return this.http.put(`${this.API_URL}/${data.no}`,data)

  }

  logIn(data:any):Observable<any>{
    return this.http.post('http://reqres.in/api/login',data,{
    headers:{
      'Access-Control-Allow-Origin': '*'

    }  
    
  })
  }


  

  deletecreateOrder(id:any){
    return this.http.delete(`${this.API_URL}/${id}`)

  }
  getDetails(id:any){
    return this.http.get(`${this.API_URL}/${id}`)

  }
  getorderDetails(){
    return this.http.get(this.APPLICATION_URL)

  }
  getgroceryItem(){
    return this.http.get(this.grocery_URL)
  }
  getelectronicsItem(){
    return this.http.get(this.electronics_URL)
  }
  gethomeAppliance(){
    return this.http.get(this.homeAppliance_URL)
  }

  updateFav(data:any){
    const newData={
      ...data,
      selected:!data.selected
    }
    
    return this.http.put(`${this.API_URL}/${data.no}`,newData)

  }


  searchItem(value:any){
    this.dataSubject$.next(
      this. data .filter((val:any)=>val.name.toLowerCase().includes(value.toLowerCase()))
    )
  }



}

