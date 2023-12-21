// edit-note.page.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-note',
  templateUrl: 'edit-note.page.html',
  styleUrls: ['edit-note.page.scss'],
})
export class EditNotePage {
  noteId?: string;
  noteDetails: any; // Remplacez 'any' par le type spécifique de votre modèle de note
  modificationReussie: boolean = false;
  modificationReussieMessage: string = 'Enregistrement réussi !';

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private navCtrl: NavController
  ) {}

  ionViewDidEnter() {
    this.noteId = this.route.snapshot.paramMap.get('id') || undefined;

    if (this.noteId !== undefined) {
      this.noteDetails = this.noteService.getNoteDetails(this.noteId);

      if (this.noteDetails === undefined) {
        console.error('Aucune note trouvée pour l\'identifiant fourni.');
      }
    } else {
      console.error('noteId est undefined');
    }
  }

   // Fonction pour mettre à jour la note dans son ensemble
   updateNote() {
    if (this.noteId !== undefined && this.noteDetails !== undefined) {
      // Mettez à jour la note dans son ensemble
      this.noteService.updateNote(this.noteId, this.noteDetails);
      this.modificationReussie = true;
      setTimeout(() => {
        this.modificationReussie = false;
      }, 2000);
    } else {
      console.error('noteId ou noteDetails est undefined.');
    }
     // Mise à jour réussie
     this.modificationReussieMessage = 'La modification enregistrée avec succès.';
     this.modificationReussie = true;
      // Masquer le message après 3 secondes (3000 millisecondes)
    setTimeout(() => {
      this.modificationReussie = false;
      
      // Naviguer vers la page List-notes
      this.navCtrl.navigateBack('/list-notes');
    }, 3000);
  }


updateSubject(subjectIndex: number) {
  if (this.noteId !== undefined && this.noteDetails !== undefined) {
    if (this.noteDetails.subjects !== undefined && subjectIndex < this.noteDetails.subjects.length) {
      const updatedSubject = this.noteDetails.subjects[subjectIndex];
      this.noteService.updateSubject(this.noteId, subjectIndex, updatedSubject);
      this.modificationReussie = true;
      setTimeout(() => {
        this.modificationReussie = false;
      }, 2000);
    } else {
      console.error('La liste des matières ou l\'index fourni est invalide.');
    }
  } else {
    console.error('noteId ou noteDetails est undefined.');
  }
}


}
