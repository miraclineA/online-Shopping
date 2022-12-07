import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import{HttpClientModule}from '@angular/common/http';
import { ExampletableComponent } from './exampletable/exampletable.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { DetailsComponent } from './details/details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
 import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
 import {MatSelectModule} from '@angular/material/select';
import { Myguard } from './myguard';
import{MatDividerModule} from '@angular/material/divider';
import { ShoppingComponent } from './shopping/shopping.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {MatListModule} from '@angular/material/list';
import { HiglightdirectiveDirective } from './higlightdirective.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    ExampletableComponent,
    HeaderComponent,
    ReactiveformComponent,
    CardsComponent,
    LoginpageComponent,
    SideheaderComponent,
    DetailsComponent,
    StepperComponent,
    ShoppingComponent,
    WishlistComponent,
    HiglightdirectiveDirective,
    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule
    


    
    
    
  ],
  providers: [Myguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
