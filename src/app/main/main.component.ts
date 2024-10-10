import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isvisible:boolean=false

  constructor(private router:Router){}
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
