import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
addcategory:FormGroup;
isSidePanVisible:boolean=false;
constructor(){}
ngOnInit(): void {
  this.addcategory=new FormGroup({
    'addcategory':new FormControl(null,[Validators.required])
  })
}
onSubmit(){
  var add = this.addcategory.value;
  console.log(add);
  this.addcategory.reset();
}
}
