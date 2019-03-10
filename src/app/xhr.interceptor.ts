import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor  {
    constructor(private cookieService : CookieService) {

      }

    intercept(request: HttpRequest<any>, next: HttpHandler){
        const token = this.cookieService.get('token');

        const xhr = request.clone({
          //  headers:request.headers.set('Authorization','Bearer '+token).set('headername','value')..
            headers:request.headers.set('Authorization','Bearer '+token)

        });

        return next.handle(xhr);

    }

}
