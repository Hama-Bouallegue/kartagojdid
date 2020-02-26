import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../../environments/environment'


@Injectable({
    providedIn: 'root',
})
export class LoginService {
    apiUrl = environment.api_url;
    header: HttpHeaders;
    
    constructor(private _http: HttpClient) {
      this.header = new HttpHeaders;
      this.header =  this.header.append('Content-type','application/json');
      this.header =  this.header.append('Accept','application/json');
    }
    login(email , password){
        let params = new HttpParams().set('email',email).set('password',password);
        return this._http.get(this.apiUrl+'/etudiants',{headers : this.header,params})
    }
    
}