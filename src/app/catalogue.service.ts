import { Injectable } from '@angular/core';
import { API_URLS } from './../app/config/api.url.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient:HttpClient,private authenticationService:AuthenticationService) { }


  getAllCategories(){
    return this.httpClient.get(API_URLS.CATALOGUE_URL+'/categories');
  }

  getResource(url){
    return this.httpClient.get(url);
  }

  deleteResource(url){
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt});
    return this.httpClient.delete(url,{headers:headers});
  }

  postResource(url,data){
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt});
    return this.httpClient.post(url,data,{headers:headers});
  }

  putResource(url,data){
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt});
    return this.httpClient.put(url,data,{headers:headers});
  }


    patchResource(url,data){
      let headers = new HttpHeaders({'Authorization':'Bearer '+this.authenticationService.jwt});
      return this.httpClient.patch(url,data,{headers:headers});
    }

}
