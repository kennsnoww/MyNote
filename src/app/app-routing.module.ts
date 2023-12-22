import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashPage } from './splash/splash.page';
import { HomePage } from './home/home.page';

const routes: Routes = [


  { path: '', component: SplashPage },
  { path: 'home', component: HomePage },

  // {
  //   path: '',
  //   redirectTo: 'splash',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'splash',
  //   loadChildren: () =>
  //     import('./splash/splash.module').then(
  //       (m) => m.SplashPageModule
  //     ),
  // },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomePageModule
      ),
  },


  {
    path: '',
    redirectTo: 'app.component',
    pathMatch: 'full',
  },
  {
    path: 'app.component',
    loadChildren: () =>
      import('./app.module').then(
        (m) => m.AppModule
      ),
  },

 
  {
    path: 'add-subjects/:id',
    loadChildren: () => import('./add-subjects/add-subjects.module').then(m => m.AddSubjectsPageModule)
  },

  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'list-notes',
    loadChildren: () => import('./list-notes/list-notes.module').then( m => m.ListNotesPageModule)
  },
  {
    path: 'delete-note',
    loadChildren: () => import('./delete-note/delete-note.module').then( m => m.DeleteNotePageModule)
  },
  {
    path: 'update-note',
    loadChildren: () => import('./update-note/update-note.module').then( m => m.UpdateNotePageModule)
  },
  {
    path: 'average',
    loadChildren: () => import('./average/average.module').then( m => m.AveragePageModule)
  },
  {
    path: 'note-details',
    loadChildren: () => import('./note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },

  {
    path: 'note-details/:id',
    loadChildren: () =>
      import('./note-details/note-details.module').then(
        (m) => m.NoteDetailsPageModule
      ),
  },
  {
    path: 'edit-note',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },


  {
    path: 'edit-note/:id',
    loadChildren: () =>
      import('./edit-note/edit-note.module').then(
        (m) => m.EditNotePageModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },


  {
    path: 'average',
    loadChildren: () =>
      import('./average/average.module').then((m) => m.AveragePageModule),
  },
  {
    path: 'add-subjects',
    loadChildren: () => import('./add-subjects/add-subjects.module').then( m => m.AddSubjectsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  
  
  {
    path: '',
    redirectTo: 'splash', // Redirige vers la page de splash par défaut
    pathMatch: 'full',
  },

  {
    path: 'splash',
    component: SplashPage,
  },
  {
    path: 'home',
    component: HomePage,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
