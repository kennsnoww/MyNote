// // src/app/services/note/note.model.ts

// export interface Subject {
//   name: string;
//   score: number;
//   coefficient: number;
// }

// export interface Note {
//   id?: string;
//   score: number;
//   course: string;
//   semester: string;
//   firstName: string;
//   lastName: string;
//   studentId: string;
//   coefficient: number; 
//   subjects: Subject[];
// }


// src/app/services/note/note.model.ts
export interface Subject {
  name: string;
  score: number;
  coefficient: number;
}

export interface Note {
  id?: string;
  score: number;
  semester: string;
  firstName: string;
  lastName: string;
  studentId: string;
  coefficient: number;
  subjects: Subject[];
}

