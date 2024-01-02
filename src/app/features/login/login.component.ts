import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  messages = {
    username: { required: "Please enter username", minlength: "Username must have atleast 4 characters" },
    password: { required: "Please enter password", minlength: "Password must have atleast 4 characters" }
  };

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', { updateOn: 'change', validators: [Validators.required, Validators.minLength(4)] }],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }


  login() {

    this.loginService.loggedIn = true;

    let queryParams: any;

    this.route.queryParams.subscribe(params => queryParams = params);

    if (queryParams.callback) {

      let url = new URL(queryParams?.callback);

      this.router.navigateByUrl(`${url.pathname}?${url.searchParams.toString()}`);

    }
  }

}
