import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PlayerRegistration from './helper';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  public getUserdetails() {
    return this.http.get(`${PlayerRegistration}/reg/`);
  }
//getDetails


  public getById(id:any){
    return this.http.get(`${PlayerRegistration}/reg/get/${id}`);
  }
//getDetailsById


  public getByName(name:any){
    return this.http.get(`${PlayerRegistration}/reg/getbyname/${name}`);
  }
//getDetailsByName


  public addUserDetails(user :User) {
      return this.http.post(`${PlayerRegistration}/reg/`,user);
  }
//addUser


  public rlogin(user :any):Observable<any> {
    return this.http.post(`${PlayerRegistration}/reg/login/`,user);
  }
//login


  // public update(user:User) {
  //   return this.http.put(`${PlayerRegistration}/reg/update/`,user);
  // }

  public updateById(id:number,pd:any){
    return this.http.put(`${PlayerRegistration}/${id}`,pd);
  }
//updateById

  public logout() {
    localStorage.removeItem('user');
    return true;
  }

  public setUser(user) {
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser() {
    let userStr=localStorage.getItem('user');
    if(userStr!=null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }
}