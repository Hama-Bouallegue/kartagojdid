import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './inscriptionService/inscription.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  niveaux: any;
  nom: any;
  prenom: any;
  adresse: any;
  password: any;
  tel: any;
  email: any;
  niveau: any;
  niveau_api: String;
  rst_api: any;
  constructor(public toastController: ToastController,public navCtrl : NavController,public inscriptionService: InscriptionService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.inscriptionService.getNiveau().subscribe(data => {
      this.niveaux = data;
      console.log(this.niveaux);
    })
  }
  showselected($event) {
    this.niveau = $event.detail.value;
    console.log("selector: ", this.niveau);
    this.niveau_api = "api/niveaux/" + this.niveau
  }
  inscrit() {

    this.inscriptionService.postEtudiant(this.nom, this.prenom, this.adresse, this.email, this.tel, this.password, this.niveau_api).subscribe(data => {

      this.rst_api = data;
      localStorage.setItem("id_user",this.rst_api.id);
      localStorage.setItem("nom_user",this.rst_api.nom);
      localStorage.setItem("prenom",this.rst_api.prenom);
      localStorage.setItem("adresse",this.rst_api.adresse);
      localStorage.setItem("email",this.rst_api.email);
      localStorage.setItem("tel",this.rst_api.tel);
      localStorage.setItem("password",this.rst_api.password);
      localStorage.setItem("niveau",this.rst_api.niveau);
      console.log(this.rst_api);
    }, error => {
      console.log(error)
    })
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "S'il vous plaît, attendez",
      duration: 2000

    });
    this.inscrit();
    await loading.present();
    if (localStorage.getItem("id_user")) {
      await loading.onDidDismiss();
      this.navCtrl.navigateRoot('/matieres')
    }
    else {
      await loading.onDidDismiss();
      this.presentToast("Erreur au niveau de l'inscription ,réessayer autre fois ");
      console.log("error")
    }
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  login(){
    this.navCtrl.navigateRoot('/');
  }
}
