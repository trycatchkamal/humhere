import { Component, OnInit,HostBinding,Input,ViewChild,AfterViewInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidebarService} from '../../services/sidebar.service'
import {AuthService} from "../../services/auth/auth.service";
import {Observable} from 'rxjs'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit,AfterViewInit {
  @ViewChild('sidenav') private navbar:MatSidenav;
  @Input() expandedMenu:boolean = false;

  isLoggedIn$:Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  constructor(private sidebarService:SidebarService, private authService:AuthService) {
  }

  ngAfterViewInit():void {
    this.sidebarService.change.subscribe(isOpen => {
      isOpen ? this.navbar.close() : this.navbar.open();
    });
  }
}
