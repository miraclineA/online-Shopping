import { Component, ElementRef, OnDestroy, OnInit, VERSION, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ServiceExampleService } from '../service-example.service';
import { Country, State, City }  from 'country-state-city';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';




@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit , OnDestroy {
  firstFormGroup = this._formBuilder.group({
    no: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    cost:['',Validators.required]
  });
  
 
  fourthFormGroup = this._formBuilder.group({
    shippingAddress:['',Validators.required],
    expectedDate:['',Validators.required]
    
  })
  thirdFormGroup:any
  country = new FormControl(null, Validators.required)
  state = new FormControl(null, Validators.required)
  isLinear = false;
  states: any;
  Country: any;
  dialog: any;


  destroyvalue$ = new Subject <boolean>

  


  constructor(private service: ServiceExampleService, private _formBuilder: FormBuilder, dialog:MatDialog) {
 
  }
 
  

  countries:any
  form1(){
    this.firstFormGroup.value
  }

  form2(){
    this.secondFormGroup.value
  }
  form3(){
    this.thirdFormGroup.value
  }

  form4(){
    console.log(this.fourthFormGroup.value);
    this.service.createOrder({...this.firstFormGroup.value,...this.secondFormGroup.value,...this.fourthFormGroup.value,id:this.firstFormGroup.value['no']}).subscribe(formGroup=>{

    })
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    
    this.countries=Country.getAllCountries()
    this.thirdFormGroup=new FormGroup({
      
      Country:this.country,
      State:this.state
    })

    this.country.valueChanges.pipe(takeUntil(this.destroyvalue$)).subscribe((countriesInWorld:any)=>{
      this.states=State.getStatesOfCountry(countriesInWorld.isoCode)
     


    })

  }
  ngOnDestroy(): void {
    this.destroyvalue$.next (true)
    this.destroyvalue$.complete()
  }
}
