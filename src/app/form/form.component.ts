import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  userSignup(userForm: any): void {
    this.name = userForm.value.name;
    this.email = userForm.value.email;
    this.password = userForm.value.password;
    this.confirmPassword = userForm.value.confirmPassword;

    console.log('userForm');
    console.log(userForm);

    console.log('userForm.value');
    console.log(userForm.value);

    if(this.password === this.confirmPassword) {
      console.log('User signed up successfully!');
    } else {
      console.log('Password and Confirm Password do not match!');
    }
  }
}
