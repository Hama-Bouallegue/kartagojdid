import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import{LoginService}from './loginservice/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model : any={}
  email
  password
  constructor(public navCtrl : NavController,private loginservice:LoginService) { }

  ngOnInit() {
  }
inscription() {
this.navCtrl.navigateRoot('/inscription')
}
login(){
this.loginservice.login(this.email,this.password).subscribe(data=>{
  this.navCtrl.navigateRoot('/home/tab1')
})
}
}
