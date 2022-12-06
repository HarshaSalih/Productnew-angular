import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule  } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:AddProductComponent
  },

  {
    path:"view",
    component:ViewProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
