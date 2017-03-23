import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import { Component, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  showSignOut = false;
  private authSubscription: Subscription;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.subscribe((auth: FirebaseAuthState) => {

      if (auth) {
        this.showSignOut = true;
      } else {
        this.showSignOut = false;
      }
    })
  }

  signOut(): void {
    this.afAuth.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
