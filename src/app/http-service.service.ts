import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Feeling {
  name: string;
  color: string;
  emoji: string;
}

export class Suggestion {
  title: string;
  feelings: Feeling[];
  description: string;
  steps: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getSuggestions(): Suggestion[] {
    return [
      {title: 'Make a cake!', feelings: [{name: 'Sad', color: 'dodgerblue', emoji: '😢'}, {name: 'Helpless', color: 'gray', emoji: '😔'}], 
      description: `This is a delicious cake that is sure to cheer you up! Take your time and enjoy making it.`,
      steps: ['Set oven to 500 degrees and get out 80 eggs',
              'Wisk 80 eggs and place them into the oven until they are ready.',
              'Enjoy your yummy cake!']},
      {title: 'Make a cake!', feelings: [{name: 'Sad', color: 'dodgerblue', emoji: '😢'}, {name: 'Helpless', color: 'gray', emoji: '😔'}], 
      description: `This is a delicious cake that is sure to cheer you up! Take your time and enjoy making it.`,
      steps: ['Set oven to 500 degrees and get out 80 eggs',
              'Wisk 80 eggs and place them into the oven until they are ready.',
              'Enjoy your yummy cake!']},
    ]
  }

  getFeelings(): Feeling[] {
    return [
      {name: 'Happy', color: 'gold', emoji: '😃'},
      {name: 'Sad', color: 'dodgerblue', emoji: '😢'},
      {name: 'Helpless', color: 'gray', emoji: '😔'},
    ]
  }
}

// title: string = 'Make a cake!';
// feelings: Feeling;
// description: string = `This is a delicious cake that is sure to cheer you up! Take your time and enjoy making it.`;
// steps: string[] = [
//   'Set oven to 500 degrees and get out 80 eggs',
//   'Wisk 80 eggs and place them into the oven until they are ready.',
//   'Enjoy your yummy cake!'