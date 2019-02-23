import { Injectable } from '@angular/core';
import { API_URLS } from './../app/config/api.url.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient:HttpClient) { }


  getAllCategories(){
    return this.httpClient.get(API_URLS.CATALOGUE_URL+'/categories');
  }

  getResource(url){
    return this.httpClient.get(url);
  }

}
