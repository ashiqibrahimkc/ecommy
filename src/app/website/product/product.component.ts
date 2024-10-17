import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productlist:any=[];
  productlist1:any=[];
  productlist2:any=[];
  more:boolean=false;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.productlist=this.product.slice(0,4);
    this.productlist1=this.product.slice(0,4);
    this.productlist2=this.product.slice(0,4);
  }
  goToDetails(){
    this.router.navigate(['details'])
  }
product:any=[{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
  {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
  {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
  {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',}
]
show(){
  this.more=!this.more;
  this.productlist=this.more?this.product:this.product.slice(0,4)
}
show1(){
  this.more=!this.more;
  this.productlist1=this.more?this.product:this.product.slice(0,4)
}
show2(){
  this.more=!this.more;
  this.productlist2=this.more?this.product:this.product.slice(0,4)
}
}
