import {Component} from '@angular/core';
import { FormControl, FormGroup,  Validators} from "@angular/forms";


const {required} = Validators;

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl('', required),
    'password': new FormControl('', required)
  })

  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }
}
