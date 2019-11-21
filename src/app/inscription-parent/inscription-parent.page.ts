import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inscription-parent',
  templateUrl: './inscription-parent.page.html',
  styleUrls: ['./inscription-parent.page.scss'],
})
export class InscriptionParentPage implements OnInit {
  constructor(public navCtrl : NavController ) { }


  ngOnInit() {
  }
  login() {
    this.navCtrl.navigateRoot('login-parent')
  }
}
