import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSubjectsPageRoutingModule } from './add-subjects-routing.module';

import { AddSubjectPage } from './add-subjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSubjectsPageRoutingModule
  ],
  declarations: [AddSubjectPage]
})
export class AddSubjectsPageModule {}
