import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  signinForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){}
ngOnInit(): void {
  this.signinForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

}
user={
  email:'',
  password:''
}
onLogin(){
var add =this.signinForm.value;
console.log(add)
if(this.user.email==='ashiq@gmail.com'&&this.user.password==='ashiq123'){
  this.router.navigate(['/home'])
}else{
  window.alert("your data is invalid")
  this.signinForm.reset()
}
}
onSignup(){
  this.router.navigate(['/signup'])
}
}
