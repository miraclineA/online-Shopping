import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs'
const cores = require('cors')

@Injectable({
  providedIn: 'root'

})



export class ServiceExampleService {
  [x: string]: any;
  // [x: string]: any;
  API_URL=' http://localhost:3000/onlineShopping'
  APPLICATION_URL='http://localhost:3000/orderList'
  countryData: any;

  private dataSubject$: Subject<Object>=new Subject();
  dataEvent$ = this.dataSubject$.asObservable();

  data:any
  
  
  
  
  

  constructor(private http:HttpClient ,  
    ) {}

    
  // getUsers(){
  //   return this.http.get('https://reqres.in/api/users?page=2')
  // }





  getcreateOrder(){
     this.http.get(this.API_URL).subscribe(val=>{
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
  orderDetails(){
    return this.http.get(this.APPLICATION_URL)

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

  // private countryData = countrycitystatejson;


  // getCountries() {
  //   return this.countryData.getCountries(); 
  // }


}

