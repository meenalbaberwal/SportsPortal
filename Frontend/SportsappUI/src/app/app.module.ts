import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { BookingComponent } from './booking/booking.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { NavheaderbookingComponent } from './navheaderbooking/navheaderbooking.component';
import { UpdatePageComponent } from './update-page/update-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent,
    HomePageComponent,
    RegistrationPageComponent,
    NavheaderComponent,
    NavheaderbookingComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  // exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
