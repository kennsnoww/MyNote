// splash.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Naviguer vers 'home' après 3 secondes
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 3400);
  }
}
