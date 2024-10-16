import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddprofileComponent } from '../addprofile/addprofile.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(private diloge:MatDialog){}
  close(){
    this.diloge.closeAll()
  }
  openaddprofile(){
    this.diloge.open(AddprofileComponent,{
      width:'800px',
      disableClose:true
    })
  }

}
