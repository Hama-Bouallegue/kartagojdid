import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { MatieresService } from './matieresservice/matieres.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.page.html',
  styleUrls: ['./matieres.page.scss'],
})
export class MatieresPage implements OnInit {
  matiere: any;
  api_url = environment.serve_url + "/";
  constructor(public navCtrl: NavController, public matieresService: MatieresService, public loadingController: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: "S'il vous plaît, attendez",
      duration: 2000
    });
    this.matieres();
    await loading.present();
  }
  
  goCours(nom) {
    this.navCtrl.navigateRoot('/cours')
    console.log(nom);
  }
  matieres() {
    this.matieresService.getMatiere().subscribe(data => {
      this.matiere = data;
      console.log(this.matiere);
    }, error => {
      console.log(error)
    })
  }
}
