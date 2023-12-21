// src/app/services/note/note.service.ts
import { Injectable } from '@angular/core';
import { Note, Subject } from './note.model';

@Injectable({
  providedIn: 'root',
})


export class NoteService {
  addSubjectToNote(noteId: string, subject: Subject) {
    throw new Error('Method not implemented.');
  }
  private notes: Note[] = [];
  private idCounter = 1;
  //getNotesBySemester: any;

  // note.service.ts

  addSubjectsToNote(noteId: string, subject: Subject) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    
    if (noteIndex !== -1) {
      // Si la note est trouvée, ajoutez la nouvelle matière à la liste des matières de la note
      this.notes[noteIndex].subjects.push(subject);
    } else {
      console.error('La note avec l\'ID fourni n\'a pas été trouvée.');
    }
  }



addNote(note: Note) {
  note.id = this.idCounter.toString();
  this.idCounter++;
  this.notes.push(note);
}


updateNote(noteId: string, updatedNote: Note): void {
  const index = this.notes.findIndex(note => note.id === noteId);

  if (index !== -1) {
    this.notes[index] = { ...this.notes[index], ...updatedNote };
  } else {
    console.error("Aucune note trouvée pour l'identifiant fourni.");
  }
}

// Méthode pour obtenir une note par ID
getNoteById(noteId: string): Note | undefined {
  return this.notes.find(note => note.id === noteId);
}

deleteSubject(noteId: string, subjectIndex: number) {
  const note = this.notes.find(note => note.id === noteId);
  if (note && note.subjects && note.subjects.length > subjectIndex) {
    note.subjects.splice(subjectIndex, 1);
  }
}

updateSubject(noteId: string, subjectIndex: number, updatedSubject: Subject) {
  const note = this.notes.find(note => note.id === noteId);
  if (note) {
    note.subjects[subjectIndex] = updatedSubject;
  }
}
  getNotes(): Note[] {
    return this.notes;
  }

  deleteNote(noteId: string) {
  this.notes = this.notes.filter(note => note.id !== noteId);
}

  getNoteDetails(noteId: string) {
    return this.notes.find((note) => note.id === noteId);
  }

  // calculateWeightedAverage(): number {
  //   let totalWeightedScore = 0;
  //   let totalCoefficient = 0;

  //   for (const note of this.notes) {
  //     if (note.coefficient !== undefined && note.coefficient !== null) {
  //       totalWeightedScore += note.score * note.coefficient;
  //       totalCoefficient += note.coefficient;
  //     } else {
  //       // Si le coefficient n'est pas défini, utilisez un coefficient par défaut
  //       totalWeightedScore += note.score;
  //       totalCoefficient += 1; // Coefficient par défaut
  //     }
  //   }

  //   if (totalCoefficient === 0) {
  //     // Éviter la division par zéro
  //     return 0;
  //   }

  //   return totalWeightedScore / totalCoefficient;
  // }

  // getAverageBySemester(semester: string): number {
  //   const semesterNotes = this.notes.filter((note) => note.semester === semester);
  //   const totalScore = semesterNotes.reduce((sum, note: Note) => sum + note.score * note.coefficient, 0);
  //   const totalCoefficient = semesterNotes.reduce((sum, note: Note) => sum + note.coefficient, 0);
  
  //   return totalScore / (totalCoefficient || 1); // Éviter la division par zéro
  // }
  



  getAverage(): number {
    if (this.notes.length === 0) {
      return 0; // Ou une valeur par défaut appropriée
    }

    const totalScore = this.notes.reduce((sum, note) => sum + note.score, 0);
    return totalScore / this.notes.length;
  }




// Nouvelle méthode pour calculer la moyenne par semestre
getAverageBySemester(semester: string): number {
  const filteredNotes = this.notes.filter((note) => note.semester === semester);
  if (filteredNotes.length === 0) {
    return 0; // Ou une valeur par défaut
  }

  const totalScore = filteredNotes.reduce((total, note) => total + this.calculateWeightedAverage(note), 0);
  const totalCoefficient = filteredNotes.reduce((total, note) => total + this.calculateTotalCoefficient(note), 0);

  return totalScore / totalCoefficient;
}

// Nouvelle méthode pour calculer la moyenne générale
getGeneralAverage(): number {
  if (this.notes.length === 0) {
    return 0; // Ou une valeur par défaut
  }

  const totalScore = this.notes.reduce((total, note) => total + this.calculateWeightedAverage(note), 0);
  const totalCoefficient = this.notes.reduce((total, note) => total + this.calculateTotalCoefficient(note), 0);

  return totalScore / totalCoefficient;
}

// Méthodes auxiliaires pour calculer la moyenne pondérée
private calculateWeightedAverage(note: Note): number {
  return note.subjects.reduce((total, subject) => total + subject.score * subject.coefficient, 0);
}

private calculateTotalCoefficient(note: Note): number {
  return note.subjects.reduce((total, subject) => total + subject.coefficient, 0);
}


getNotesBySemester(semester: string): Note[] {
  return this.notes.filter((note) => note.semester === semester);
}

calculateNoteAverage(notes: Note[]): number {
  if (notes.length === 0) {
    return 0;
  }

  const totalScore = notes.reduce((total, note) => total + note.score, 0);
  const totalCoefficient = notes.reduce((total, note) => total + note.coefficient, 0);

  return totalScore / totalCoefficient;
}


}
