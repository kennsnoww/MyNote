import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteNotePage } from './delete-note.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteNotePageRoutingModule {}
