import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.authenticationService.loadToken();
  }

  title = 'AngularCatalogueWebApp';

constructor(private authenticationService:AuthenticationService,private route:Router) { }
  isAdmin(){
    return this.authenticationService.isAdmin();
  }

  isUser(){
    return this.authenticationService.isUser();
  }

  isAuthenticatedUser(){
    return this.authenticationService.isAuthenticatedUser();
  }

  logOut(){
    this.authenticationService.logOut();
      this.route.navigateByUrl('/login');
  }

}
