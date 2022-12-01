import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: String;
  password: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.username == "AD" && this.user.password == "123456") {
      console.log("correct");
      this.router.navigate(['/menu'])
    } else {
      console.log("incorrect");
    }
    return false;
  }

}
