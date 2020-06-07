import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInstanceItemComponent } from './process-instance-item.component';

describe('ProcessInstanceItemComponent', () => {
  let component: ProcessInstanceItemComponent;
  let fixture: ComponentFixture<ProcessInstanceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessInstanceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInstanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
