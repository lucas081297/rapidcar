import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarselectComponent } from './carselect/carselect.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { AlugarComponent } from './pages/alugar/alugar.component';
import { AboutComponent } from './pages/about/about.component';
import { StoresComponent } from './pages/stores/stores.component';

register()

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarselectComponent,
    NavbarComponent,
    
    HomeComponent,
    AlugarComponent,
    AboutComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [CarselectComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
