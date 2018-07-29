import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }
  doLogin(event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      let user = this.loginForm.value;
      this.userService.login(user)
        .subscribe((response: any) => {
          if (response.id) {
            localStorage.setItem('token', response.id);
            this.router.navigate(['products']);
          }
        }, (err) => {
          console.log('login failed');
        })
    }

  }

}
