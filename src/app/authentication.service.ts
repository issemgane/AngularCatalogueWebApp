import { Injectable } from '@angular/core';
import { API_URLS } from './../app/config/api.url.config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private httpClient:HttpClient) { }

jwt:string;
username:string;
roles:Array<string>;

login(data){
  return this.httpClient.post(API_URLS.AUTHENTICATION_URL+'/login',data,{observe:'response'});
}

saveToken(jwt:string){
localStorage.setItem('token',jwt);
}

}
