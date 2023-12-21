// splash.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage {

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    setTimeout(() => {
      // Naviguer vers la page Home après 3 secondes
      this.navCtrl.navigateForward('/home');
    }, 3000);
  }
}
