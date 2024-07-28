import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesTabComponent } from './grades-tab.component';

describe('GradesTabComponent', () => {
  let component: GradesTabComponent;
  let fixture: ComponentFixture<GradesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
