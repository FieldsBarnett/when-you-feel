import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-editor',
  templateUrl: './suggestion-editor.component.html',
  styleUrls: ['./suggestion-editor.component.scss']
})
export class SuggestionEditorComponent implements OnInit {

  steps: number[] = [];
  private numberOfSteps = 0;

  constructor() { }

  ngOnInit() {
  }

  addStep() {
    this.numberOfSteps++;
    this.steps.push(this.numberOfSteps);
    console.log(this.steps);
  }

  removeStep() {
    this.numberOfSteps--;
    this.steps.pop();
  }

}
