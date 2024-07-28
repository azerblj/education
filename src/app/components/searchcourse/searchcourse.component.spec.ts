import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcourseComponent } from './searchcourse.component';

describe('SearchcourseComponent', () => {
  let component: SearchcourseComponent;
  let fixture: ComponentFixture<SearchcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
