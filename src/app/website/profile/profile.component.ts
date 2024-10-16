import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private dialoge:MatDialog){}
  closeprofile(){
    this.dialoge.closeAll()
  }
  editprofile(){
    this.dialoge.open(EditComponent,{
      width:'400px',
      disableClose:true
    })
  }

}
