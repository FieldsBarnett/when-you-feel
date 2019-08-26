import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HttpService, Feeling } from '../services/http-service.service';
import { Suggestion } from '../services/http-service.service';
import { Subject, Observable, BehaviorSubject, of, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, last, map, mergeMap, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-suggestion-filter',
  templateUrl: './suggestion-filter.component.html',
  styleUrls: ['./suggestion-filter.component.scss']
})

export class SuggestionFilterComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  selectedFeelings: Feeling[] = [];
  unselectedFeelings: Feeling[];
  suggestions$: Observable<Suggestion[]>;
  selectedFeelings$ = new Subject<Feeling[]>();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // Get Feelings
    this.httpService.getFeelings().subscribe(feelings => this.unselectedFeelings = feelings);

    // Subscribe for the selected feelings
    this.selectedFeelings$.pipe(
      debounceTime(750),
    ).subscribe(selectedFeelings => {
      this.suggestions$ = this.httpService.getFilteredSuggestions(selectedFeelings);
    });
  }

  deselect(feeling) {
    // Remove feeling from selected feelings
    this.selectedFeelings.splice((this.selectedFeelings.indexOf(feeling)), 1);
    // Pass modified selection to subject
    this.selectedFeelings$.next(this.selectedFeelings);

    this.unselectedFeelings.push(feeling);
    this.unselectedFeelings.sort();
  }

  select(feeling) {
    // Remove feeling from selected feelings
    this.unselectedFeelings.splice((this.unselectedFeelings.indexOf(feeling)), 1);

    this.selectedFeelings.push(feeling);
    // Pass modified selection to subject
    this.selectedFeelings$.next(this.selectedFeelings);
  }

}
