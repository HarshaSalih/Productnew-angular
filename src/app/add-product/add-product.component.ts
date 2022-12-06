import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"productCode":this.productCode,"ProductName":this.productName,"man_date":this.man_date,"exp_date":this.exp_date,"brand":this.brand,"price":this.price,"sellerName":this.sellerName,"distributorName":this.distributorName}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Product added successfully")
          this.productCode=""
          this.productName=""
          this.man_date=""
          this.exp_date=""
          this.brand=""
          this.price=""
          this.sellerName=""
          this.distributorName=""

        }
        else{
          alert("Something went wrong")
        }
  }
    )
}

}
