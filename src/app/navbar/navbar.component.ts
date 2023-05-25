import { Component,OnInit } from '@angular/core';
import { Navbar } from './navbar.model';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor( private user1 : UserDataService ){}
 
user= new Navbar();
location:string=this.user.location;
// search(){
//   console.log(this.user.location);
// }
result:any;
ngOnInit(){
  
}

search(){
  
  this.user1.getformdata1(this.user.location,this.user.metric,this.user.lang).subscribe(res=> {
    console.log(res);
    this.user1.setresult(res);
   
    this.result=this.user1.getresult();
    return res;
  })
}

}
