import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kartago-academy',
  templateUrl: './kartago-academy.page.html',
  styleUrls: ['./kartago-academy.page.scss'],
})
export class KartagoAcademyPage implements OnInit {
  constructor(public navCtrl : NavController ) { }


  ngOnInit() {
  }
  eleve() {
    this.navCtrl.navigateRoot('/')
  }
  parent() {
    this.navCtrl.navigateRoot('/login-parent')
  }
}
