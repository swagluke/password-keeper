import { PasswordDialogComponent } from './../password-dialog/password-dialog.component';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Password } from "../password.model";
import { MdDialog, MdDialogConfig } from "@angular/material";

// interface Password {
//     service: string;
//    username: string;
//    password: string;
//    $key: string; 
//}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  passwordStream: FirebaseListObservable<Password[]>;
  private authSubscription: Subscription;
  firebasePath: string;
  constructor(
    private af: AngularFire,
     private router: Router,
     private dialog: MdDialog) {
    this.authSubscription = af.auth.subscribe((auth: FirebaseAuthState) => {
      if (auth) {
        console.log("You are signed in. All is good.");
        this.firebasePath = `/users/${auth.uid}`;
        this.passwordStream = this.af.database.list(this.firebasePath);
      } else {
        console.log("Not sign in. Bounce to the /signin page.");
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnInit() {
  }

  showAddPasswordDialog() {
    var dialogConfig = new MdDialogConfig();
    dialogConfig.data = { firebasePath: this.firebasePath };
    this.dialog.open(PasswordDialogComponent, dialogConfig);
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
