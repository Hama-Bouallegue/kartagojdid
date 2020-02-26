import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  apiUrl = environment.api_url;
  header : HttpHeaders;
  matier : any ;
  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders;
    this.header =  this.header.append('Content-type','application/json');
    this.header =  this.header.append('Accept','application/json');
   }
   getCours(){
     this.matier = "/api/matieres/5";
     let params = new HttpParams().set('matiere',this.matier);
     return this._http.get(this.apiUrl+'/cours',{headers : this.header, params})
   }
}
