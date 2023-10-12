import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PlayerRegistration from '../helper';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingtoken:any
  
  constructor(private login:PlayerService) { 
    this.bookingtoken=sessionStorage.getItem("name")
  }

  ngOnInit(): void {
    this.getByName();
  }

  user:any
  id:any
  

  getByName() {
    this.login.getByName(this.bookingtoken).subscribe(
      data=>{
        this.getById(data);
      }
    );
  }

  getById(refId:any) {
    this.login.getById(refId).subscribe(
      data=>{
        console.log(data)
        this.user=data
      }
    );
  }
  // (data)=> {
  //   // this.user=this.login.getUser();
  //   this.login.getUserdetails();
  // }
  // (error)=> {
  //   console.log(error);
  // }
  
}
