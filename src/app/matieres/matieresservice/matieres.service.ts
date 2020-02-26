import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatieresService {
  apiUrl = environment.api_url;
  header : HttpHeaders;
  niveau : any ;
  constructor(private _http: HttpClient) { 
    this.header = new HttpHeaders;
      this.header =  this.header.append('Content-type','application/json');
      this.header =  this.header.append('Accept','application/json');
  }
  getMatiere(){
    this.niveau = localStorage.getItem('niveau');
    let params = new HttpParams().set('niveau',this.niveau);
    return this._http.get(this.apiUrl+'/matieres',{headers : this.header,params})
}

}
