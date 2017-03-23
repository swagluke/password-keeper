import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { Password } from "../password.model";
import * as firebase from 'firebase';

interface DialogData {
  firebasePath: string;
}
@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {
  formPassword: Password;
  private firebasePath: string;

  constructor(private dialogRef: MdDialogRef<PasswordDialogComponent>) {
    var data: DialogData = this.dialogRef.config.data;
    this.firebasePath = data.firebasePath;
    console.log("Received the data", data);
    this.formPassword = new Password();
   }

  ngOnInit() {
  }

  onSubmit() {
    try {
      console.log("TODO. Push", this.formPassword);
      firebase.database().ref().child(this.firebasePath).push(this.formPassword);
      this.dialogRef.close();
    } catch(e) {
      console.log("Error while submitting form",e);
    }
  }
}
