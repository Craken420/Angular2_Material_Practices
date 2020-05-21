import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingDataTableComponent } from './sorting-data-table.component';

describe('SortingDataTableComponent', () => {
  let component: SortingDataTableComponent;
  let fixture: ComponentFixture<SortingDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
