import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './component/layout/header/header.component';
import { BannerComponent } from './component/layout/banner/banner.component';
import { Dashboard2Component } from './component/dashboard2/dashboard2.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './component/layout/main/main.component';
import { MenuComponent } from './component/layout/menu/menu.component';
import { DetailEventComponent } from './component/layout/detail-event/detail-event.component';
import { DetailComponent } from './component/layout/detail/detail.component';
import { LoginComponent } from './component/layout/login/login.component';
import { SignupComponent } from './component/layout/signup/signup.component';
  

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    Dashboard2Component,
    FooterComponent,
    MainComponent,
    MenuComponent,
    DetailEventComponent,
    DetailComponent,
    LoginComponent,
    SignupComponent,
 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
