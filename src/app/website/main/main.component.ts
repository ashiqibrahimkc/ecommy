import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isvisible:boolean=false

  constructor(private router:Router,private dialoge:MatDialog){}
  openprofile(){
    this.dialoge.open(ProfileComponent,{
      width:'800px',
      disableClose:true
    })
  }
showmenu(){
  this.isvisible=true
}
hidemenu(){
  this.isvisible=false
}
  onhome(){
this.router.navigate(['/home'])
  }
  onfresh(){
    this.router.navigate(['product'])
  }
  onCart(){
    this.router.navigate(['cart'])
  }
}
