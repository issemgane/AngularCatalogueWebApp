import { Injectable } from '@angular/core';
import { API_URLS } from './../app/config/api.url.config';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private httpClient:HttpClient, private cookieService : CookieService) { }

jwt:string;
username:string;
roles:Array<string>;

login(data){
  return this.httpClient.post(API_URLS.AUTHENTICATION_URL+'/login',data,{observe:'response'});
}

saveToken(jwt:string){
//  localStorage.setItem('token',jwt);
 this.cookieService.set('token',jwt);
  this.jwt=jwt;
  this.parseJwt();
}


parseJwt(){
  let jwtHelper = new JwtHelperService();
  let decodedToken = jwtHelper.decodeToken(this.jwt);
  this.username = decodedToken.obj;
  this.roles = decodedToken.roles;

}

isAdmin(){
  return this.roles.indexOf('ADMIN') >= 0;
}

isUser(){
  return this.roles.indexOf('USER') >= 0;
}

isAuthenticatedUser(){
  return this.roles != undefined;
}

loadToken(){
//  this.jwt =  localStorage.getItem('token');
 this.jwt =  this.cookieService.get('token');
  if(this.jwt!=null && this.jwt!='' && this.jwt!=undefined){
    this.parseJwt();
  }

}

logOut(){
  this.initCredentials();
  this.cookieService.delete('token');
  //localStorage.removeItem('token');
}

initCredentials(){
  this.jwt = null;
  this.username = null;
  this.roles = null;
}

}
