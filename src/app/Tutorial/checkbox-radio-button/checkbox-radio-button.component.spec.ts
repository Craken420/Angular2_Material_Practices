import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRadioButtonComponent } from './checkbox-radio-button.component';

describe('CheckboxRadioButtonComponent', () => {
  let component: CheckboxRadioButtonComponent;
  let fixture: ComponentFixture<CheckboxRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
