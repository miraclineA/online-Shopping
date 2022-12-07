import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ServiceExampleService } from '../service-example.service';
import { Country, State, City }  from 'country-state-city';
import { MatDialog } from '@angular/material/dialog';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(
//     control: FormControl | null,
//     form: FormGroupDirective | NgForm | null
//   ): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(
//       control &&
//       control.invalid &&
//       (control.dirty || control.touched || isSubmitted)
//     );
//   }
// }

// interface Country {
//   shortName: string;
//   name: string;
// }


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit  {
  firstFormGroup = this._formBuilder.group({
    no: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    cost:['',Validators.required]
  });
  
  // thirdFormGroup = this._formBuilder.group({
  //   shippingAddress:['',Validators.required],
  // });
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

  // @ViewChild('country') country!: ElementRef
  // @ViewChild('city') city!: ElementRef
  // @ViewChild('state') state!: ElementRef
  // name = 'Angular ' + VERSION.major;
  // countries = Country.getAllCountries();
  // states :any;
  

  // selectedCountry : any
  // selectedState : any
  // selectedCity : any
  // cities : any
  

  // onCountryChange($event: any): void {
  //   this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
  //   this.selectedCountry = JSON.parse(this.country.nativeElement.value);
  //   this.cities = this.selectedState = this.selectedCity = null;
  // }

  // onStateChange($event: any) : void {
  //   this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode)
  //   this.selectedState = JSON.parse(this.state.nativeElement.value);
  //   this.selectedCity = null;

  // }

  // onCityChange($event : any): void {
  //   this.selectedCity = JSON.parse(this.city.nativeElement.value)
  // }

  // clear(type: string): void {
  //   switch(type) {
  //     case 'country':
  //       this.selectedCountry = this.country.nativeElement.value = this.states = this.cities = this.selectedState = this.selectedCity = null;
  //       break;
  //     case 'state':
  //       this.selectedState = this.state.nativeElement.value = this.cities = this.selectedCity = null;
  //       break;
  //     case 'city':
  //       this.selectedCity = this.city.nativeElement.value = null;
  //       break;
  //   }
  // }


  // country = new FormControl(null, [Validators.required]);
  // state = new FormControl({ value: null, disabled: true }, [
  //   Validators.required,
  // ]);
  // city = new FormControl({ value: null, disabled: true }, [
  //   Validators.required,
  // ]);
  constructor(private service: ServiceExampleService, private _formBuilder: FormBuilder, dialog:MatDialog) {
    // this.countries = this.service.getCountries();
    // this.form = new FormGroup({
    //   country: this.country,

    // })
  }
  
  // form: FormGroup;
  // matcher = new MyErrorStateMatcher();

  // countries: Country[];
  //  country = new FormControl(null, [Validators.required]);
  countries:any
  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }
  form3(){
    console.log(this.thirdFormGroup.value);
  }

  form4(){
    console.log(this.fourthFormGroup.value);
    this.service.createOrder({...this.firstFormGroup.value,...this.secondFormGroup.value,...this.fourthFormGroup.value,id:this.firstFormGroup.value['no']}).subscribe(a=>{

    })
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    // console.log(Country.getAllCountries())
    // console.log(State.getAllStates()); 
    this.countries=Country.getAllCountries()
    this.thirdFormGroup=new FormGroup({
      
      Country:this.country,
      State:this.state
    })
    this.country.valueChanges.subscribe((d:any)=>{
      this.states=State.getStatesOfCountry(d.isoCode)
      console.log('---d---',d)
      console.log('--state---',this.states)

    })

  }}
