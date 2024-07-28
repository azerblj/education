import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTabComponent } from './parent-tab.component';

describe('ParentTabComponent', () => {
  let component: ParentTabComponent;
  let fixture: ComponentFixture<ParentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
