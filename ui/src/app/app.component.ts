import { Component,OnInit,ViewChild,AfterViewInit,OnDestroy } from '@angular/core';
import { AppService } from './services/app.service';
import {MatDialog} from '@angular/material';
import {LocationDialog} from "./views/location/locationdialog.component";
import {Observable} from 'rxjs';
import {ISubscription} from 'rxjs/Subscription';
import {LocationService} from "./services/location.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit, OnDestroy {
  title:string;
  dialogResult;
  selectedCity$:Observable<string>;
  private citySubscription: ISubscription;
  private welcomeMessageSubscription: ISubscription;

  constructor(private locationService:LocationService, private appService:AppService, public dialog:MatDialog) {
    this.welcomeMessageSubscription=this.appService.getWelcomeMessage().subscribe((data:any) => {
      this.title = data.content;
    });

    this.selectedCity$ = this.locationService.selectedCity;
  }

  openDialog() {
    let dialogRef = this.dialog.open(LocationDialog, {
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.citySubscription=this.selectedCity$.subscribe(city=> {
      if (!this.appService.isNonEmptyString(city)) {
        this.openDialog();
      }
    });
  }

  ngOnDestroy(){
    this.citySubscription.unsubscribe();
    this.welcomeMessageSubscription.unsubscribe();
    console.log('app comp destroy');
  }
}
