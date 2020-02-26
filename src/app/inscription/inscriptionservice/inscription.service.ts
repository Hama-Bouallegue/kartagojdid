import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  apiUrl = environment.api_url;
  header: HttpHeaders
  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders;
    this.header =  this.header.append('Content-type','application/json');
    this.header =  this.header.append('Accept','application/json');
   }
   getNiveau (){
    return this._http.get(this.apiUrl+'/niveaux',{headers : this.header});
  }
  postEtudiant(nom,prenom,adresse,email,tel,password,niveau){
    return this._http.post(this.apiUrl+'/etudiants',
    {
      "nom" : nom,
      "prenom" : prenom,
      "adresse" : adresse,
      "email" : email,
      "tel" : 526536528,
      "password" : password,
      "niveau" : niveau
    }
    ,{headers : this.header});
  }
}
