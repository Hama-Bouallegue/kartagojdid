import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from './loginService/login.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model : any={}
  constructor(public navCtrl : NavController ,private LoginService:LoginService) { }

  ngOnInit() {
  }
inscription() {
this.navCtrl.navigateRoot('/inscription')
}

}
