import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  apiUrl = 'http://127.0.0.1:8000/api/etudiants'
  apiURl = 'http://127.0.0.1:8000/api/niveaux'
  header: HttpHeaders
  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders;
    this.header =  this.header.append('Content-type','application/json');
    this.header =  this.header.append('Accept','application/json');
      
  }
 
  posteleve(nom,prenom,adresse,password,niveau) {
     
    return this._http.post(this.apiUrl ,{"nom":nom,"prenom":prenom,"adresse":adresse,"password":password,"niveau":niveau} ,{ headers : this.header })
}
  getNiveau (){
    return this._http.get(this.apiURl,{headers : this.header});
  }
 
}
