import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateFormComponent } from './process-create-form.component';

describe('ProcessCreateFormComponent', () => {
  let component: ProcessCreateFormComponent;
  let fixture: ComponentFixture<ProcessCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
