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
    this.subjects.push({ name: '', score: 0, coefficient: 1 });
  }

  removeSubject(index: number) {
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

      this.navCtrl.navigateForward(`/add-subjects/${newNote.id}`);
      this.noteService.addNote(newNote);
      this.navCtrl.navigateBack('/list-notes');
    }
  }
}
