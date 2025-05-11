import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpinionPage } from './opinion.page';

describe('OpinionPage', () => {
  let component: OpinionPage;
  let fixture: ComponentFixture<OpinionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
