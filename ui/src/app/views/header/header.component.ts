import { Component, OnInit, Inject, Output, EventEmitter, HostListener } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LocationDialog} from '../location/locationdialog.component';
import {AuthService} from "../../services/auth/auth.service";
import {SidebarService} from "../../services/sidebar.service"
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {LocationService} from "../../services/location.service";
import {User} from '../../models/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm:FormControl = new FormControl();
  showSearch:boolean=false;
  isLoggedIn$:Observable<boolean>;
  selectedCity$:Observable<string>;

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.selectedCity$ = this.locationService.selectedCity;
  }

  constructor(private locationService:LocationService,
              public locationDialog:MatDialog,
              private authService:AuthService,
              private sidebarService:SidebarService) {
  }

  openLocationDialog():void {
    let dialogRef = this.locationDialog.open(LocationDialog, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  toggleSidebar():void {
    this.sidebarService.toggle();
  }

  login():void {
    this.authService.login(<User>{});
  }
}


