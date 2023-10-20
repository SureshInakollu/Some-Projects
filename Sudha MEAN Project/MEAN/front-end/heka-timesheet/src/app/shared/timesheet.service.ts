import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
api_url = "http://localhost:3000";
  constructor(public http:HttpClient) { }

getAllUsers(){
  return this.http.get(`${this.api_url}/user/getAllUsers`)
}

createUser(user:any){
  return this.http.post(`${this.api_url}/user/createUser`, user)
}

login(formdata:any){
  return this.http.post(`${this.api_url}/user/login`, formdata)
}

}
