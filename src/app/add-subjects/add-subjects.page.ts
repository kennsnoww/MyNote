// add-subjects.page.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { NavController } from '@ionic/angular';
import { Subject } from '../services/note.model';

@Component({
  selector: 'app-add-subject',
  templateUrl: 'add-subjects.page.html',
  styleUrls: ['add-subjects.page.scss'],
})
export class AddSubjectPage {
  noteId?: string;
  subject: Subject = { name: '', score: 0, coefficient: 1 };

  constructor(private route: ActivatedRoute, private noteService: NoteService, private navCtrl: NavController) {}

  ionViewDidEnter() {
    this.noteId = this.route.snapshot.paramMap.get('id') || undefined;
  }

  addSubject() {
    // Vérifiez que l'ID de la note est défini
    if (this.noteId !== undefined) {
      // Ajoutez la nouvelle matière à la note en utilisant les valeurs saisies par l'utilisateur
      const newSubject: Subject = {
        name: this.subject.name,
        score: this.subject.score,
        coefficient: this.subject.coefficient,
      };

      // Ajoutez la nouvelle matière à la note
      this.noteService.addSubjectToNote(this.noteId, newSubject);

      // Effacez les champs après l'ajout
      this.clearFields();
    } else {
      console.error("L'ID de la note est undefined");
    }
  }

  // Méthode pour effacer les champs après l'ajout
  clearFields() {
    this.subject = { name: '', score: 0, coefficient: 1 };
  }
}
