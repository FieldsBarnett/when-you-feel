import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionEditorComponent } from './suggestion-editor.component';

describe('SuggestionEditorComponent', () => {
  let component: SuggestionEditorComponent;
  let fixture: ComponentFixture<SuggestionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
