import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {InMemoryDataService}  from './in-memory-data.service';

import {CartModule} from './cart/cart.module';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';

import {AppComponent}  from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';
import {CartService} from './cart/cart.service';

/*
 * Routing
 */
import {ROUTING}  from './app.routes';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, 
                WelcomeComponent, CheckoutViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
            // InMemoryWebApiModule.forRoot(InMemoryDataService),
            BrowserModule, FormsModule, ReactiveFormsModule, 
            ROUTING, CartModule, CategoryModule, ProductModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
