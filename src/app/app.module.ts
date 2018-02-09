import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductListComponent } from './product/productList.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './product/star.component';
import { ProductDetailsComponent } from './product/product-details.component';



@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent,
    ProductListComponent, 
    ProductFilterPipe, 
    StarComponent, 
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot([
      { path : 'products', component : ProductListComponent },
      { path : 'product/:id', component: ProductDetailsComponent },
      { path : 'home' , component : WelcomeComponent },
      { path : '', redirectTo : 'home' , pathMatch: 'full' },
      { path : '**', redirectTo : 'home', pathMatch: 'full'}

    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
