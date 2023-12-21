import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showSpinner = true;

  ngOnInit() {
    // Simulez une attente de 3 secondes avant de masquer le spinner
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }
}
