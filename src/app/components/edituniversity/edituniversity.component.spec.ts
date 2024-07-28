import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituniversityComponent } from './edituniversity.component';

describe('EdituniversityComponent', () => {
  let component: EdituniversityComponent;
  let fixture: ComponentFixture<EdituniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
