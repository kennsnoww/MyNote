import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EditNotePage } from './edit-note.page';

describe('EditNotePage', () => {
  let component: EditNotePage;
  let fixture: ComponentFixture<EditNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
