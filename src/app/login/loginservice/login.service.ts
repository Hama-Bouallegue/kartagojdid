import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
    providedIn: 'root',
})
export class LoginService {
    apiUrl = 'http://127.0.0.1:8000/api/login'
    header: HttpHeaders
    constructor(private _http: HttpClient) {
      this.header = new HttpHeaders;
      this.header =  this.header.append('Content-type','application/json');
      this.header =  this.header.append('Accept','application/json');
    }
    login(email , password){
        return this._http.post(this.apiUrl,{email,password},{headers : this.header})
    }

   
}