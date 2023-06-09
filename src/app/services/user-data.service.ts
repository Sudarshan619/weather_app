import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Navbar } from '../navbar/navbar.model';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
 private API="https://api.openweathermap.org/data/2.5/weather?";
 user=new Navbar();
 
 apikey:any="&appid=add your own api key";
  static getformdata1:any;
  

  
  constructor(private http:HttpClient) { }
  datareceived:EventEmitter<any>=new EventEmitter<any>();
 ans:any;

  getformdata1(location=this.user.location,metric=this.user.metric,lang=this.user.lang){
   return this.http.get(this.API+'q='+location+'&units='+ metric +"&lang="+lang+ this.apikey ); 
  }
  setresult(data:any){
   this.datareceived.emit(data);
  }
  getresult(){
    return this.ans;
  }

 
}
