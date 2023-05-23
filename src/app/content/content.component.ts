import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  static show() {
    throw new Error('Method not implemented.');
  }
  
  constructor(private user1: UserDataService) { 
   
  }
  result:any;
  // value = this.user1.value;
  value:boolean=false;
  ngOnInit() {
    
    this.user1.datareceived.subscribe(data=>{
      this.result=data;
      console.log(this.result.cod);
      this.value=true;
      
    })
    
  };

   
}


