import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddSubjectPage } from './add-subjects.page';

describe('AddSubjectsPage', () => {
  let component: AddSubjectPage;
  let fixture: ComponentFixture<AddSubjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
