import { Component, OnInit, Input } from '@angular/core';
import { Suggestion, Feeling } from '../services/http-service.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion: Suggestion;

  title: string;
  feelings: Feeling[];
  description: string;
  steps: string[];
  constructor() { }

  ngOnInit() {
    // Unpack suggestion
    this.title = this.suggestion.title;
    this.feelings = this.suggestion.feelings;
    this.description = this.suggestion.description;
    this.steps = this.suggestion.steps
  }

}