import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AlertService} from "../../services/alert.service";
import {AppService} from "../../services/app.service"
import {LocationService} from "../../services/location.service";
import {City} from '../../models/city';

@Component({
  selector: 'locationdialog',
  templateUrl: 'locationdialog.component.html',
})
export class LocationDialog {
  isPlaceSelected:boolean = false;
  selectedPlace:string = "";

  places:City[] = [
    {name: 'Chennai1', id: 1},
    {name: 'Chennai2', id: 2},
    {name: 'Chennai3', id: 3},
    {name: 'Chennai4', id: 1}
  ];

  constructor(public dialogRef:MatDialogRef<LocationDialog>,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private alert:AlertService, private locationService:LocationService) {
    dialogRef.disableClose = true;
  }

  valueChanged(event):void {
    this.isPlaceSelected = true;
    this.selectedPlace = event.value;
    this.locationService.changeCity(this.selectedPlace);
    this.alert.success("You are in: " + this.selectedPlace, false);
    this.dialogRef.close();
  }
}
