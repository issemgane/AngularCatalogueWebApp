import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authenticationService:AuthenticationService) { }
//private authenticationService:AuthenticationService,private route:Route
  ngOnInit() {
  }

  onLogin(dataForm){
    this.authenticationService.login(dataForm).subscribe(response=>{
      console.log();
      let jwt = response.headers.get('Authorization');
        this.authenticationService.saveToken(jwt);
    },error=>{

    });
  }

}
