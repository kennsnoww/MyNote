import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ListNotesPage } from './list-notes.page';

describe('ListNotesPage', () => {
  let component: ListNotesPage;
  let fixture: ComponentFixture<ListNotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
