import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catalogueService:CatalogueService,private route:Router) { }
  listcategories:any;
  listProduit:any;
  currentCategory;

  ngOnInit() {
    this.catalogueService.getAllCategories().subscribe(data=>{
      this.listcategories=data;
    },error=>{
      console.log("error while getting categories...");
    });
  }

  getProduct(category:any){
    /*  console.log(category._links.products.href);
        this.catalogueService.getResource(category._links.products.href).subscribe(response=>{
          this.listProduit=response;
        },error=>{

        });*/
        this.currentCategory=category;
          let url = category._links.products.href;
        this.route.navigate(['/products/'+btoa(url)]);
      //  this.route.navigateByUrl('/products');
  }

}
