import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTabComponent } from './student-tab.component';

describe('StudentTabComponent', () => {
  let component: StudentTabComponent;
  let fixture: ComponentFixture<StudentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
