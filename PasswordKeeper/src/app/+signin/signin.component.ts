import { Component, OnInit } from '@angular/core';
import 'rosefire';
import { environment } from "../../environments/environment";
import { AngularFireAuth, AuthMethods, AuthProviders, FirebaseAuthState } from "angularfire2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../shared/common.scss', './signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  signInWithRosefire(): void {
    Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      }
      //console.log("Rosefire authoentication complete. Rosefire user: ",rfUser);
      this.afAuth.login(rfUser.token, {
        method: AuthMethods.CustomToken,
        provider: AuthProviders.Custom,
      }).then((auth: FirebaseAuthState) => {
        //console.log("Firebase authentication is done too. Firebase uid:", auth.uid);
        this.router.navigate(['/']);
      });
    });
  }
}
