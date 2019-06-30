import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HttpService, Feeling } from '../http-service.service';
import { Suggestion } from '../http-service.service';

@Component({
  selector: 'app-suggestion-filter',
  templateUrl: './suggestion-filter.component.html',
  styleUrls: ['./suggestion-filter.component.scss']
})

export class SuggestionFilterComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  suggestions: Suggestion[];
  selectedFeelings: Feeling[] = [];
  unselectedFeelings: Feeling[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.unselectedFeelings = this.httpService.getFeelings();
    this.suggestions = this.httpService.getSuggestions();
  }

  deselect(feeling) {
    // Remove feeling from selected feelings
    this.selectedFeelings.splice((this.selectedFeelings.indexOf(feeling)), 1);

    // Add feeling to unselected and sort
    this.unselectedFeelings.push(feeling);
    this.unselectedFeelings.sort();
  }

  select(feeling) {
    // Remove feeling from selected feelings
    this.unselectedFeelings.splice((this.unselectedFeelings.indexOf(feeling)), 1);

    // Add feeling to selected and sort
    this.selectedFeelings.push(feeling);
  }

}
