import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logIn!: FormGroup;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.logIn = this._formBuilder.group({
      username: this.username,
      password: this.password
    })
  }

}
