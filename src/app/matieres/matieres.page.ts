import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.page.html',
  styleUrls: ['./matieres.page.scss'],
})
export class MatieresPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }
goCours(){
  this.navCtrl.navigateRoot('/cours')
}
}
