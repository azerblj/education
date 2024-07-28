import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourComponent } from './edit-cour.component';

describe('EditCourComponent', () => {
  let component: EditCourComponent;
  let fixture: ComponentFixture<EditCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
