import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.username != "" && this.user.password != "") {
      console.log("correct");
      this.authGuard.canActivate()
    } else {
      console.log("incorrect");
    }
    return false
  }

}
