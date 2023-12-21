// list-notes.page.ts
import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../services/note.model';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  templateUrl: 'list-notes.page.html',
  styleUrls: ['list-notes.page.scss'],
})
export class ListNotesPage {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ionViewDidEnter() {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(index: string) {
    this.noteService.deleteNote(index);
    this.notes = this.noteService.getNotes();
  }

  addNote() {
    this.navCtrl.navigateForward('/add-note');
  }

  viewNoteDetails(note: Note) {
    this.router.navigate(['/note-details', note.id]);
  }

  editNote(noteId: string | undefined) {
    if (noteId !== undefined) {
      this.router.navigate(['/edit-note', noteId]);
    } else {
      console.error('Identifiant de note non défini.');
    }
  }

  // Méthode pour calculer le score total d'une note
  getNoteTotalScore(note: Note): number {
    let totalScore = 0;

    for (const subject of note.subjects) {
      totalScore += subject.score * subject.coefficient;
    }

    return totalScore;
  }
}
