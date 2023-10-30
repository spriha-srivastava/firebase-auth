
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm : FormGroup;
  type = "password";
  icon ="visibility_off";
  userResponse = "";
  constructor(private fb : FormBuilder, private router : Router, public auth: AuthService){}
  ngOnInit() {
    let placeHolderView = true;
    if(placeHolderView){
      let res={
        userName: "info@auth0.com",
        password : "123@auth"
      }
      this.buildLoginForm(res);
    }

  }

  buildLoginForm(login: any) {
    this.loginForm = this.fb.group({
      userName: [login.userName, Validators.required],
      password: [login.password, Validators.required],
    });
  }

  submitLogin() {
  }


eyeView(){
  if(this.type =='password'){
    this.type = 'text';
    this.icon = 'visibility';
  } else {
    this.type = 'password';
    this.icon = 'visibility-off'
  }
}

forgetPassword(){
  this.router.navigate(['/masters']);
}

}
