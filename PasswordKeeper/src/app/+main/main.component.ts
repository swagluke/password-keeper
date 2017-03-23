import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  constructor(private af: AngularFire, private router: Router) {
    this.authSubscription = af.auth.subscribe((auth: FirebaseAuthState) => {
      if (auth) {
        console.log("You are signed in. All is good.");
      } else {
        console.log("Not sign in. Bounce to the /signin page.");
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
