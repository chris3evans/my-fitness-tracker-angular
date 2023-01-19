import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsViewComponent } from './workouts-view.component';

describe('WorkoutsViewComponent', () => {
  let component: WorkoutsViewComponent;
  let fixture: ComponentFixture<WorkoutsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
