import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursTabComponent } from './cours-tab.component';

describe('CoursTabComponent', () => {
  let component: CoursTabComponent;
  let fixture: ComponentFixture<CoursTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
