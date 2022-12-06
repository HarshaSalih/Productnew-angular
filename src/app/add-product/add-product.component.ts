import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productCode=""
  productName=""
  man_date=""
  exp_date=""
  brand=""
  price=""
  sellerName=""
  distributorName=""

  readValues=()=>
  {
    let data:any={"productCode":this.productCode,"ProductName":this.productName,"man_date":this.man_date,"exp_date":this.exp_date,"brand":this.brand,"price":this.price,"sellerName":this.sellerName,"distributorName":this.distributorName}
    console.log(data)
  }


}
