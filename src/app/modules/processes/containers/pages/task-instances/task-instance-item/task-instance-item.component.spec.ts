import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInstanceItemComponent } from './task-instance-item.component';

describe('TaskInstanceItemComponent', () => {
  let component: TaskInstanceItemComponent;
  let fixture: ComponentFixture<TaskInstanceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInstanceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInstanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
