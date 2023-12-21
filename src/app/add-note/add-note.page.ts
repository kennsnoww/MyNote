


// src/app/pages/add-note/add-note.page.ts
import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NavController } from '@ionic/angular';
import { Note, Subject } from '../services/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: 'add-note.page.html',
  styleUrls: ['add-note.page.scss'],
})
export class AddNotePage {
  subjects: Subject[] = [];
  semester?: string;
  firstName?: string;
  lastName?: string;
  studentId?: string;

  constructor(private noteService: NoteService, private navCtrl: NavController) {}

  addSubject() {
    // Ajoutez une nouvelle matière avec les valeurs par défaut
    this.subjects.push({ name: '', score: 0, coefficient: 1 });
  }

  removeSubject(index: number) {
    // Supprimez une matière en utilisant son index
    this.subjects.splice(index, 1);
  }

  addNote() {
    if (this.subjects.length > 0 && this.semester && this.firstName && this.lastName && this.studentId) {
      const newNote: Note = {
        subjects: this.subjects,
        semester: this.semester,
        firstName: this.firstName,
        lastName: this.lastName,
        studentId: this.studentId,
        coefficient: 0,
        score: 0,
      };

      // Naviguez vers la page add-subjects avec l'ID de la nouvelle note
      this.navCtrl.navigateForward(`/add-subjects/${newNote.id}`);
      
      // Ajoutez la note au service
      this.noteService.addNote(newNote);

      // Retournez à la page de liste des notes après l'ajout
      this.navCtrl.navigateBack('/list-notes');
    }
  }
}
