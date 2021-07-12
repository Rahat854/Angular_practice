import {Component} from '@angular/core';
import { FormControl, FormGroup,  Validators} from "@angular/forms";
import {usernameValidator} from "./username.validator";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      usernameValidator.cannotContainSpace,
      usernameValidator.shouldBeUnique
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  })
  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }
}
