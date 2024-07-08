import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  isValidLogin = false;

  ngOnInit() {
    // this.subscribeToUsernameAndPassword();
  }

  submit() {
    console.log(this.loginForm.value);
    this.validateLogin();
    this.loginForm.reset();
  }

  // subscribeToUsernameAndPassword() {
  //   let name = this.loginForm.get('username')?.valueChanges.subscribe((username) => username);
  //   let password = this.loginForm.get('password')?.valueChanges.subscribe((password) => password);
  // }

  validateLogin() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    console.log("hello")

    let users = JSON.parse(localStorage.getItem("users") ?? "[]");
    console.log(users)
    for (let user of users) {
      if (user.username === username && user.password === password) {
        console.log("helo")
        console.log("Valid user ")
        this.isValidLogin = true;
        break
      }
    
    }

    
    this.isValidLogin = false;
  }
}
