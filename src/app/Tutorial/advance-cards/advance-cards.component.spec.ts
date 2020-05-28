import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCardsComponent } from './advance-cards.component';

describe('AdvanceCardsComponent', () => {
  let component: AdvanceCardsComponent;
  let fixture: ComponentFixture<AdvanceCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
