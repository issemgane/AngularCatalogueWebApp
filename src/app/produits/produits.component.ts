import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

listProducts:any;

  constructor(private catalogueService:CatalogueService,private route:Router,private activatedRoute:ActivatedRoute) {

      /* let url = atob(activatedRoute.snapshot.params.urlpdt);
       this.getProducts(url);*/
       this.activatedRoute.params.subscribe(params => {
         let url = atob(activatedRoute.snapshot.params.urlpdt);
          this.getProducts(url);
        });
}

  ngOnInit() {
  }


getProducts(url:string){
  this.catalogueService.getResource(url).subscribe(response=>{
    this.listProducts=response;
  },error=>{
    console.log(error);
  });
}


}
