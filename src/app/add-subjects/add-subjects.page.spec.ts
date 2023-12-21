import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSubjectsPage } from './add-subjects.page';

describe('AddSubjectsPage', () => {
  let component: AddSubjectsPage;
  let fixture: ComponentFixture<AddSubjectsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
