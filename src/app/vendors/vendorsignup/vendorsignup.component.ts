import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrl: './vendorsignup.component.css'
})
export class VendorsignupComponent {
  signupForm:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      country:['',Validators.required],
      branch:['',Validators.required],
    })
  }
  onLogin(){
    var add = this.signupForm.value;
    console.log(add)
    window.alert('now you are our partner')
  }
}
