import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrl: './addprofile.component.css'
})
export class AddprofileComponent implements OnInit{
addform:FormGroup
constructor(private fb:FormBuilder,private dialoge:MatDialog){

}

ngOnInit(): void {
  this.addform=this.fb.group({
    'name':['',Validators.required],
    'phone':['',Validators.required],
    'email':['',Validators.required],
    'place':['',Validators.required],
    'district':['',Validators.required],
    'state':['',Validators.required],
    'post':['',Validators.required],
    'pincode':['',Validators.required]
  })
}
  onsubmit(){
console.log(this.addform.value)
this.addform.reset()
this.dialoge.closeAll()
  }
  closetab(){
    this.dialoge.closeAll()
  }
}
