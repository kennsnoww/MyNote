import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 // constructor() {}

  showSpinner: boolean = true;

  ionViewWillEnter() {
    // Simulez une opération asynchrone (par exemple, le chargement de données)
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000); // Supposons que le chargement prend 3 secondes
  }
}
