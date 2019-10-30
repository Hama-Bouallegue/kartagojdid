import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }
login() {
  this.navCtrl.navigateRoot('/')
}
inscrit() {
  this.navCtrl.navigateRoot('/home/tab1')
}
}
