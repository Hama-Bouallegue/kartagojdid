import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController : NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.logged();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logged(){
    if(localStorage.getItem("id_user")){
      this.navController.navigateRoot('matieres');
    }
    else{
      this.navController.navigateRoot('login');
    }
  } 
}
