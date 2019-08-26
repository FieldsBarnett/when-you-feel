import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User, database } from 'firebase';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Promise } from 'q';
import { map, merge, distinct } from 'rxjs/operators';

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
        .then(res => resolve(undefined), error => reject(error));
    });
  }


  getSuggestions(): Observable<Suggestion[]> {
    return this.firestore.collection('suggestions', ref => ref.limit(50)).get()
      .pipe(
        map(snapshot => {
          const suggestions = [];
          snapshot.forEach(doc => suggestions.push(<Suggestion> doc.data()));
          return suggestions;
        })
      );
  }


  getFilteredSuggestions(feelings: Feeling[]): Observable<any[]> {
    if (feelings.length == 0) {
      return new Observable<any>();
    }

    // Holds result from each query
    const results: Observable<any>[] = [];

    // Query for each selected feeling and map to suggestions
    feelings.forEach(feeling => {
      results.push(
        this.firestore.collection('suggestions', ref => ref.where('feelings', 'array-contains', feeling).limit(20)).get()
          .pipe(
            map(snapshot => {
                const suggestions = [];
                snapshot.docs.forEach(doc => suggestions.push(doc.data()));
                return suggestions;
            }),
          )
      );
    });

    // Combine results into one observable
    return new Observable().pipe(
      merge(...results),
      distinct(),
    )
  }

  getFeelings(): Observable<Feeling[]> {
    return of([
      {name: 'Happy', color: 'gold', emoji: '😃'},
      {name: 'Sad', color: 'dodgerblue', emoji: '😢'},
      {name: 'Helpless', color: 'gray', emoji: '😔'}]);
  }

  submitSuggestion(suggestion: Suggestion, user: User) {
    
  }
}