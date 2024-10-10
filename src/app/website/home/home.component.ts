import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  more:boolean=false;
  category:boolean=false;
  productlist:any[];
  constructor(private router:Router){
  }
 ngOnInit(): void {
  this.productlist=this.product.slice(0,4)
 }

  onMobile(){
this.router.navigate(['/home/mobile'])
  }
  product:any=[{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
    {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
    {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
    {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',}
  ];
  
  moreitems(){
    this.more=!this.more;
    this.productlist=this.more?this.product:this.product.slice(0,4)
   
  }
  morecategory(){
    this.category=!this.category;
  }
}
