import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { LoginService } from './loginservice/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  rst_api: any;
  constructor(public toastController: ToastController, public loadingController: LoadingController, public navCtrl: NavController, private loginService: LoginService) { }

  ngOnInit() {
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  inscription() {
    this.navCtrl.navigateRoot('/inscription')
  }
  login() {
    this.loginService.login(this.email, this.password).subscribe(data => {
      this.rst_api = data;
      console.log(this.rst_api[0].id)
      localStorage.setItem("id_user", this.rst_api[0].id);
      localStorage.setItem("nom_user", this.rst_api[0].nom);
      localStorage.setItem("prenom", this.rst_api[0].prenom);
      localStorage.setItem("adresse", this.rst_api[0].adresse);
      localStorage.setItem("email", this.rst_api[0].email);
      localStorage.setItem("tel", this.rst_api[0].tel);
      localStorage.setItem("password", this.rst_api[0].password);
      localStorage.setItem("niveau", this.rst_api[0].niveau);
      console.log(this.rst_api);
      //this.navCtrl.navigateRoot('/home/tab1')
    }, error => {
      console.log(error)
    })
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "S'il vous plaît, attendez",
      duration: 2000

    });
    this.login();
    await loading.present();
    if (localStorage.getItem("id_user")) {
      await loading.onDidDismiss();
      this.navCtrl.navigateRoot('/matieres')
    }
    else {
      await loading.onDidDismiss();
      this.presentToast("Email ou mot de passe incorrect. réessayer autre fois ");
      console.log("error")
    }
  }

}
