import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { BookingComponent } from './booking/booking.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { NavheaderbookingComponent } from './navheaderbooking/navheaderbooking.component';
import { UpdatePageComponent } from './update-page/update-page.component';

const routes: Routes = [
  // {path : "", component : LoginComponent}, // login in beginning
  // {path : "**", component :HomePageComponent}, //if nothing matches
  {path : "login", component : LoginComponent, pathMatch : 'full'}, // login
  {path : "registration-page", component : RegistrationPageComponent}, //registration
  {path: "booking", component:BookingComponent}, //booking
  {path : "update-page", component:UpdatePageComponent},
  {path : "home-page", component : HomePageComponent},//home page
  {path : "", component : HomePageComponent},//if empty
  {path : "**", component : HomePageComponent},//if nothing matches
  {path : "navheader", component:NavheaderComponent}, //header
  {path : "navheaderbooking", component:NavheaderbookingComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
