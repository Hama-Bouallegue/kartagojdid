import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InscriptionService } from './inscriptionservice/inscription.service'
import { Inscription } from './model/inscription.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  registerForm: FormGroup;

    loading = false;
    submitted = false;
    model: any={}
    di
  constructor(public navCtrl : NavController,private inscriptionService: InscriptionService,private modelinscri: Inscription) { }

  ngOnInit() {
   this.inscriptionService.getNiveau().subscribe((data) =>{
     console.log("data niveau "+data['_body'])
    this.di = data 
    console.log(this.di)
   }, error => {
    console.log(error);
  })
  }
login() {
  this.navCtrl.navigateRoot('/')
}


inscrit() {
 
  this.inscriptionService.posteleve()
  

      .subscribe(
          data => {
          })
          this.navCtrl.navigateRoot('/home/tab1')
        }
}
