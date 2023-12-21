import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AveragePage } from './average.page';

describe('AveragePage', () => {
  let component: AveragePage;
  let fixture: ComponentFixture<AveragePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AveragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
