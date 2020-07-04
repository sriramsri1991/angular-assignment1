import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder,
              private route: Router) {
    this.loginForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(loginForm) {
    console.log('User logged in');
    console.log(loginForm);
    this.route.navigate(['welcome', loginForm.userName]);
  }

}
