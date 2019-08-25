import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HttpService, Feeling } from '../services/http-service.service';
import { Suggestion } from '../services/http-service.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, last, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-suggestion-filter',
  templateUrl: './suggestion-filter.component.html',
  styleUrls: ['./suggestion-filter.component.scss']
})

export class SuggestionFilterComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  suggestions$;
  selectedFeelings: Feeling[] = [];
  unselectedFeelings: Feeling[];

  private filters$ = new BehaviorSubject<Feeling[]>(null);

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getFeelings().subscribe(feelings => this.unselectedFeelings = feelings);
  }

  deselect(feeling) {
    // Remove feeling from selected feelings
    this.selectedFeelings.splice((this.selectedFeelings.indexOf(feeling)), 1);

    this.unselectedFeelings.push(feeling);
    this.unselectedFeelings.sort();

    //this.getSuggestions();
  }

  select(feeling) {
    // Remove feeling from selected feelings
    this.unselectedFeelings.splice((this.unselectedFeelings.indexOf(feeling)), 1);

    this.selectedFeelings.push(feeling);
    //this.getSuggestions();
  }

  // getSuggestions() {
  //   this.filters$.next(this.selectedFeelings);
  //   this.suggestions$ = this.filters$.pipe(
  //     debounceTime(500),
  //     switchMap(feelings => this.httpService.getFilteredSuggestions(feelings.map(feeling => feeling.name))))
  // }

}
