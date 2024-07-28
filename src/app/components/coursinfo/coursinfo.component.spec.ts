import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursinfoComponent } from './coursinfo.component';

describe('CoursinfoComponent', () => {
  let component: CoursinfoComponent;
  let fixture: ComponentFixture<CoursinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
