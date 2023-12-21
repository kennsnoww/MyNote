// src/app/pages/average/average.page.ts
import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-average',
  templateUrl: 'average.page.html',
  styleUrls: ['average.page.scss'],
})
export class AveragePage {
  generalAverage: number = 0;
  semesters: string[] = [];

  constructor(private noteService: NoteService) {}

  ionViewWillEnter() {
    this.calculateAverages();
  }

  private calculateAverages() {
    this.generalAverage = this.noteService.getGeneralAverage();
    this.semesters = this.getUniqueSemesters();
  }

  getAverageBySemester(semester: string): number {
    return this.noteService.getAverageBySemester(semester);
  }

  private getUniqueSemesters(): string[] {
    const semestersSet = new Set<string>();
    this.noteService.getNotes().forEach((note) => semestersSet.add(note.semester));
    return Array.from(semestersSet);
  }
}
