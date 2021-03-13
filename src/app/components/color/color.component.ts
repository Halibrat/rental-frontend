import { Component, OnInit } from '@angular/core';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
import { ColorService } from 'src/app/services/color.service';
import { Color } from '../../models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
colors:Color[]=[];
dataLoaded=false;
colorResponseModel:ColorResponseModel={
  data:this.colors,
  message:"",
  success:true
};
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getCars().subscribe(response=>{
      this.colors=response.data
      this.dataLoaded=true;
    })
  }

}
