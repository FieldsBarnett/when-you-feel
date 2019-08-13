import { Component, OnInit } from '@angular/core';
import { HttpService, Feeling } from '../services/http-service.service';

@Component({
  selector: 'app-suggestion-editor',
  templateUrl: './suggestion-editor.component.html',
  styleUrls: ['./suggestion-editor.component.scss']
})
export class SuggestionEditorComponent implements OnInit {

  steps: number[] = [];
  private numberOfSteps = 0;
  public feelings$;
  public selectedFeelings: Feeling[] = [];
  public unselectedFeelings: Feeling[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.feelings$ = this.httpService.getFeelings();
  }

  toggleSelected(feeling: Feeling) {
    if (this.selectedFeelings.includes(feeling)) {
      this.selectedFeelings = this.selectedFeelings.filter(item => item != feeling);
    } else {
      this.selectedFeelings.push(feeling);
    }
  }
  

  addStep() {
    this.numberOfSteps++;
    this.steps.push(this.numberOfSteps);
  }


  removeStep() {
    this.numberOfSteps--;
    this.steps.pop();
  }

}
