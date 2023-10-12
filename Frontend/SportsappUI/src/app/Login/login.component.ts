
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user={
    name:'',
    password:'',
  
  };
  bookingtoken:any

  constructor(
    private router:Router,
    private snack:MatSnackBar,
    private playerservice : PlayerService,
    ) {
      this.bookingtoken=sessionStorage.setItem("name","password")
     }

  public invalidLogin=false;
 

  ngOnInit(): void { }
  
  onLogin() {
    console.log("Login btn clicked");

    if(this.user.name.trim() == '' || this.user.name == null) {
        this.snack.open('Username required!!','',{duration:3000});
        return;
    }

    if(this.user.password.trim() == '' || this.user.password == null) {
      this.snack.open('Password required!!','',{duration:3000});
      return;
    }
    this.playerservice.rlogin(this.user).subscribe(
      (data)=>
      {
        console.log("Successfully logged in!");
       
        this.playerservice.setUser(this.user);
        
        this.router.navigate(['/','booking']);
      },
      (error)=>{
        console.log("Exception occurred");
        alert("Invalid Login!");
      }
    );
  }
}
