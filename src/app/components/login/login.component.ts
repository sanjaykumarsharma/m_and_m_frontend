import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

     login = {email: null, password: null};
     hide = true;
     error = null;
  ngOnInit() {
  }

  getEmailError() {
       if ( this.login.email === '') {
        return 'You must enter a value';
       } else {
         return 'Not a valid email';
       }
  }

  getPasswordError() {
    if ( this.login.password === '') {
      return 'You must enter a value';
     }
  }

  submitLoginForm () {
    return this.http.post('http://localhost:8000/api/login', this.login).subscribe(
      data => console.log(data),
      error => {
        this.error = error.error.error;
      }
    );
  }

}
