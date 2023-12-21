import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteNotePageRoutingModule } from './delete-note-routing.module';

import { DeleteNotePage } from './delete-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteNotePageRoutingModule
  ],
  declarations: [DeleteNotePage]
})
export class DeleteNotePageModule {}
