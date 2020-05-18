import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamFormsComponent } from './param-forms.component';

describe('ParamFormsComponent', () => {
  let component: ParamFormsComponent;
  let fixture: ComponentFixture<ParamFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
