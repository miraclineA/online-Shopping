import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ExampletableComponent } from './exampletable/exampletable.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Myguard } from './myguard';
import { ShoppingComponent } from './shopping/shopping.component';
import { StepperComponent } from './stepper/stepper.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  // {path:'',component:StepperComponent},Ss
  {path:'',component:LoginpageComponent},
   {path:'fun/:id',component:CardsComponent},
  {path:'dashboard', component:ExampletableComponent},
  {path:'goshopping', canActivate:[Myguard],component:ShoppingComponent},
  {path:'wishlist', canActivate:[Myguard],component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
