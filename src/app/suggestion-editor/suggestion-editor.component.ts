import { Component, OnInit } from '@angular/core';
import { HttpService, Feeling, Suggestion } from '../services/http-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-suggestion-editor',
  templateUrl: './suggestion-editor.component.html',
  styleUrls: ['./suggestion-editor.component.scss']
})
export class SuggestionEditorComponent implements OnInit {

  newSuggestion = new Suggestion();

  public feelings$;

  constructor(
    private httpService: HttpService,
    private authService: AuthService) { }
 
  ngOnInit() {
    this.feelings$ = this.httpService.getFeelings();
  }

  toggleSelected(feeling: Feeling) {
    if (this.newSuggestion.feelings.includes(feeling)) {
      this.newSuggestion.feelings = this.newSuggestion.feelings.filter(item => item != feeling);
    } else {
      this.newSuggestion.feelings.push(feeling);
    }
    // this.httpService.getSuggestions();
  }

  trackByFn(index: any, item: any) {
    return index;
 }
  

  addStep() {
    this.newSuggestion.steps.push('');
  }


  removeStep() {
    this.newSuggestion.steps.pop();
  }

  submitSuggestion() {
    this.httpService.createSuggestion(this.newSuggestion, this.authService.user)
      .then(() => this.newSuggestion = new Suggestion())
      .catch(error => console.error(error));
  }

}
