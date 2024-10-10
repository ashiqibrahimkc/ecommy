import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  onLogin(){
    var add = this.signupForm.value;
    console.log(add)
    window.alert('now you are our partner')
  }

}