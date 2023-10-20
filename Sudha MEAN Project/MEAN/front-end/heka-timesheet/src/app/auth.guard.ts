import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { TimesheetService } from './shared/timesheet.service';

@Injectable({
  providedIn: 'root'
})

export class authGuard {
  constructor(public router:Router, public timesheet:TimesheetService){

  }

  CanActivateFn(){
    if(localStorage.getItem('userDetails')){     
    return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }
};
