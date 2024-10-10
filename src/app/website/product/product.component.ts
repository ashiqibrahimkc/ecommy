import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  constructor(private router:Router){}
  goToDetails(){
    this.router.navigate(['details'])
  }
product:any=[{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
  {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
  {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},
  {name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',},{name:'ashiq',price:'200',}
]
}
