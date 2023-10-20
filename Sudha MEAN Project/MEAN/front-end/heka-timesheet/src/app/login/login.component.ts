import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { TimesheetService } from '../shared/timesheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  error:any;
  constructor(public fb:FormBuilder, public timesheet:TimesheetService, public router:Router){
    this.loginForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('welcome@123', [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.timesheet.login(this.loginForm.value).subscribe((formdata:any)=>{
        console.log(formdata);
        if(formdata["result"]){
          this.error = formdata["message"];          
          localStorage.setItem('userDetails', JSON.stringify(formdata['result']))
          this.router.navigate(["/dashboard"])
        } else {
          this.error = formdata["message"]
        }        
      }, error => {
        this.error = error["message"]
      })
    } else{
      this.error = "Invalid login details!"
    }
  }

}
