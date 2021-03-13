import { Component, OnInit } from '@angular/core';
import { Rental } from '../../models/rental';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentals:Rental[]=[];
dataLoaded=false;
rentalResponseModel:RentalResponseModel={
  data:this.rentals,
  message:"",
  success:true
};
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.rentalService.getCars().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    })
  }

}
