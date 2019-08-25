import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Promise } from 'q';

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
  uid?: string;

  constructor() {
    this.title = '';
    this.feelings = [];
    this.description = '';
    this.steps = [];
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  suggestions$ = new Observable<Suggestion[]>();

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore
  ) { }

  createSuggestion(suggestion: Suggestion, user: User): Promise<any> {
    // Attatch the current user to the suggestion
    suggestion.uid = user.uid;

    // Convert it to a plain object for Firestore
    const data = JSON.parse(JSON.stringify(suggestion));

    // Add to firestore
    return Promise<any>((resolve, reject) => {
      this.firestore
        .collection("suggestions")
        .add(data)
        .then(success => resolve, error => reject(error));
    });
  }


  // getSuggestions() {
  //   return this.firestore.collection('suggestions').snapshotChanges()
  //     .subscribe(thing => console.log(thing));
  // }


  // getFilteredSuggestions(filters: string[]): Observable<Suggestion[]> {
  //   const suggestions$ = new Observable<Suggestion[]>(observer => observer.next(this.getSuggestions().filter(suggestion => {
  //     let matchesAnyFilter = false; 
  //     suggestion.feelings.forEach(feeling => { if (filters.includes(feeling.name)) matchesAnyFilter = true; });
  //     return matchesAnyFilter;
  //   })));
  //   return suggestions$;
  // }

  getFeelings(): Observable<Feeling[]> {
    return of([
      {name: 'Happy', color: 'gold', emoji: '😃'},
      {name: 'Sad', color: 'dodgerblue', emoji: '😢'},
      {name: 'Helpless', color: 'gray', emoji: '😔'}]);
  }

  submitSuggestion(suggestion: Suggestion, user: User) {
    
  }
}