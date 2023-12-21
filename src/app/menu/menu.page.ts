import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController) {}

  showVersion() {
    console.log('Afficher la version');
    // Ajoutez le code pour afficher la version ici
    
    this.menu.close();
    
  }

  showAbout() {
    console.log('Afficher À propos');
    // Ajoutez le code pour afficher À propos ici
    this.menu.close();
  }


  ngOnInit() {
  }

}




