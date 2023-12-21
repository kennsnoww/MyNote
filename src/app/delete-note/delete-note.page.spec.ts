import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DeleteNotePage } from './delete-note.page';

describe('DeleteNotePage', () => {
  let component: DeleteNotePage;
  let fixture: ComponentFixture<DeleteNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
