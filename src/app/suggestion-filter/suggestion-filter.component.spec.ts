import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionFilterComponent } from './suggestion-filter.component';

describe('SuggestionFilterComponent', () => {
  let component: SuggestionFilterComponent;
  let fixture: ComponentFixture<SuggestionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
