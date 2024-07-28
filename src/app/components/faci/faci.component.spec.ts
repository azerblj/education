import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaciComponent } from './faci.component';

describe('FaciComponent', () => {
  let component: FaciComponent;
  let fixture: ComponentFixture<FaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
