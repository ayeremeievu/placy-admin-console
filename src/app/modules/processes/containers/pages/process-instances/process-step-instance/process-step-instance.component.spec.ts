import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStepInstanceComponent } from './process-step-instance.component';

describe('ProcessStepInstanceComponent', () => {
  let component: ProcessStepInstanceComponent;
  let fixture: ComponentFixture<ProcessStepInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessStepInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessStepInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
