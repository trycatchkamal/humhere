import { Component,ViewEncapsulation, OnInit,HostBinding } from '@angular/core';
import { FormControl, FormGroupDirective,FormGroup,NgForm, FormBuilder, Validators } from '@angular/forms';
import {DateAdapter, ErrorStateMatcher} from '@angular/material/core';
import {MyErrorStateMatcher} from "../../services/errorstatematcher";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @HostBinding('class.alternate-theme') darkTheme: boolean = false;
  @HostBinding('class.my-app-theme') lightTheme: boolean =false;
  @HostBinding('class.bv-pp-theme') altTheme:boolean=false;

  constructor() {
  }

  ngOnInit() {

  }
}
