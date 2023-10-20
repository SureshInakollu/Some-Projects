import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { TimesheetService } from '../shared/timesheet.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'date_of_joining', 'company', 'address'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 allUsers:any;
  constructor(public timesheet:TimesheetService,
    public dialog:MatDialog, public router:Router){
    
  }

  ngAfterViewInit() {
    this.allUsers.paginator = this.paginator;
    this.allUsers.sort = this.sort;
  }

ngOnInit(){
  this.timesheet.getAllUsers().subscribe((userData)=>{
    console.log(userData);
    this.allUsers = userData
  })
}

addUser(){
  this.dialog.open(UserDialogComponent, {
    width: '500px',
    height: '500px'
  })
}

updateUser(){

}

logout(){
  this.router.navigate(['/login'])
}

}
