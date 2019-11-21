import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.page.html',
  styleUrls: ['./login-parent.page.scss'],
})
export class LoginParentPage implements OnInit {

  constructor(public navCtrl : NavController ) { }

  ngOnInit() {
  }
  inscription() {
    this.navCtrl.navigateRoot('/inscription-parent')
  }
}
