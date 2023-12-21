// note-details.page.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-note-details',
  templateUrl: 'note-details.page.html',
  styleUrls: ['note-details.page.scss'],
})
export class NoteDetailsPage {
  noteId?: string;
  noteDetails: any; // Vous pouvez remplacer 'any' par un type spécifique

  constructor(private route: ActivatedRoute, private noteService: NoteService, private navCtrl: NavController) {}

  
  ionViewDidEnter() {
    this.noteId = this.route.snapshot.paramMap.get('id') || undefined;
    
    if (this.noteId !== undefined) {
      this.noteDetails = this.noteService.getNoteDetails(this.noteId);
    } else {
      // Gérer le cas où noteId est undefined
      console.error("noteId est undefined");
    }
  }

  goBack() {
    this.navCtrl.back();
  }


  editNote() {
    if (this.noteId !== undefined) {
      this.navCtrl.navigateForward(`/edit-note/${this.noteId}`);
    } else {
      console.error("L'ID de la note est undefined");
    }
  }
  deleteNote() {
    if (this.noteId !== undefined) {
      console.log('ID de la note à supprimer :', this.noteId);
      this.noteService.deleteNote(this.noteId);
      this.navCtrl.navigateBack('/list-notes');
    } else {
      console.error("L'ID de la note est undefined");
    }
  }
  deleteSubject(subjectIndex: number) {
    if (this.noteId !== undefined) {
      this.noteService.deleteSubject(this.noteId, subjectIndex);
      // Actualisez les détails de la note après la suppression si nécessaire
      this.noteDetails = this.noteService.getNoteDetails(this.noteId);
    } else {
      console.error("L'ID de la note est undefined");
    }
  }

  addSubject() {
    if (this.noteId !== undefined) {
      // Ajoutez une nouvelle matière avec des valeurs par défaut
      const newSubject = { name: '', score: 0, coefficient: 1 };
      this.noteDetails.subjects.push(newSubject);

      // Mettez à jour la note dans le service
      this.noteService.updateNote(this.noteId, this.noteDetails);
    } else {
      console.error("noteId est undefined");
    }
  }


}
