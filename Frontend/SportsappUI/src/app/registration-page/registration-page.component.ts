import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  playerDetails=null;

  constructor(
    private router:Router,
    private playerservice:PlayerService) { }

  public user = {
    id:'',
    name: '',
    password: '',
    email: '',
    contact: '',
    pan: '',
    dob: '',
    age: '',
    country: '',
  };

  ngOnInit(): void {}
    formSubmit() {
      console.log(this.user)
      //adduser
      this.playerservice.addUserDetails(this.user).subscribe(
        (data)=>{
          console.log(data);
          alert('Player registered successfully!');
          this.getPlayerDetails();
          this.router.navigate(['/','login']);
        },
        (error)=>{
          console.log(error);
          alert('Something went wrong');
        }
        );
    }
  
    getPlayerDetails() {
      this.playerservice.getUserdetails().subscribe(
        (resp)=>{console.log(resp);
        this.playerDetails=resp;
        },
        (err)=>console.log(err)

      )
    };

}
