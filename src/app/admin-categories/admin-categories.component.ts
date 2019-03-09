import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Router } from '@angular/router';
import { API_URLS } from '../config/api.url.config';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  constructor(private catalogueService:CatalogueService,private route:Router) { }
  listcategories:any;
  listProduit:any;
  currentCategory;
  mode='list';

  ngOnInit() {
    this.getAllCategories();
  }

getAllCategories(){
  this.catalogueService.getAllCategories().subscribe(data=>{
    this.listcategories=data;
  },error=>{
    console.log("error while getting categories...");
  });
}
  onDeleteCategory(category : any){

    let confirmDelete = confirm('are you sure you want to delete this category ?');
    if(confirmDelete){
      let url = category._links.self.href;
      this.catalogueService.deleteResource(url).subscribe(data=>{
          this.mode='list';
        this.getAllCategories();
      },error=>{
        console.log('error onDeleteCategory')
      });
    }
  }

  onAddCategory(){
    this.mode='new-cat';
  }

  onSaveCategory(dataform){

    let url = API_URLS.CATALOGUE_URL+'/categories';
    this.catalogueService.postResource(url,dataform).subscribe(data=>{
        this.mode='list';
      this.getAllCategories();
    },error=>{
      console.log('error onSaveCategory')
    });

  }


onUpdateCategory(category){
    let url = this.currentCategory._links.self.href;
  this.catalogueService.putResource(url,category).subscribe(data=>{
      this.mode='list';
    this.getAllCategories();
  },error=>{
    console.log('error onSaveCategory')
  });
}

  onEditCategory(dataform){

    let url = dataform._links.self.href;
    this.catalogueService.getResource(url).subscribe(data=>{
      this.currentCategory = data;
        this.mode='edit-cat';

    },error=>{
      console.log('error onEditCategory')
    });

  }



}
