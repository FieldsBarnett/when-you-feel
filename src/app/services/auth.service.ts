import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(
    private firebase: FirebaseApp,
    private afAuth: AngularFireAuth,
  ) {
    // Subscribe to angularFire's stream of users, null if no user.
    this.afAuth.user.subscribe(user => this.user = user);
  }

  googleSignIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  emailSignIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  emailSignUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
