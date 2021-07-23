import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserFormsComponent } from './add-user-forms.component';

describe('AddUserFormsComponent', () => {
  let component: AddUserFormsComponent;
  let fixture: ComponentFixture<AddUserFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
