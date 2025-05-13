import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnNotePage } from './on-note.page';

describe('OnNotePage', () => {
  let component: OnNotePage;
  let fixture: ComponentFixture<OnNotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
