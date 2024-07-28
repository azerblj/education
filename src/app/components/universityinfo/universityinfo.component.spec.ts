import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityinfoComponent } from './universityinfo.component';

describe('UniversityinfoComponent', () => {
  let component: UniversityinfoComponent;
  let fixture: ComponentFixture<UniversityinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
