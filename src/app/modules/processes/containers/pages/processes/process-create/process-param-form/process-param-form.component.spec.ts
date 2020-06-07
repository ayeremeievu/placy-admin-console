import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessParamFormComponent } from './process-param-form.component';

describe('ProcessParamFormComponent', () => {
  let component: ProcessParamFormComponent;
  let fixture: ComponentFixture<ProcessParamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessParamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessParamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
