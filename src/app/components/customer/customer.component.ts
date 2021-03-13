import { Component, OnInit } from '@angular/core';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers:Customer[]=[];
dataLoaded=false;
customerResponseModel:CustomerResponseModel={
  data:this.customers,
  message:"",
  success:true
};
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(){
    this.customerService.getCars().subscribe(response=>{
      this.customers=response.data
      this.dataLoaded=true;
    })
  }

}
