import { Component, OnInit,HostListener,Inject } from '@angular/core';
import { WINDOW } from "../../helpers/window.service";
import { DOCUMENT } from "@angular/platform-browser";
import {Space} from "../../models/space"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  options:string[] = ['One', 'Two', 'Three'];
  minDate = new Date();
  maxDate = new Date(2018, 7, 7);
  solidColored:boolean = false;

  topFewSpaces:Space[] = [
    <Space>{
      name: "test 1 studio amazing studio",
      imageUrl: "https://dummyimage.com/200",
      locatedAt: "area1",
      openedOnDays: []
    },
    <Space>{
      name: "test 1 studio amazing studio",
      imageUrl: "https://dummyimage.com/200",
      locatedAt: "area2",
      openedOnDays: []
    },
    <Space>{
      name: "test 1 studio amazing studio",
      imageUrl: "https://dummyimage.com/200",
      locatedAt: "area3",
      openedOnDays: []
    },
    <Space>{
      name: "test 1 studio amazing studio",
      imageUrl: "https://dummyimage.com/200",
      locatedAt: "area4",
      openedOnDays: []
    },
    <Space>{
      name: "test 1 studio amazing studio",
      imageUrl: "https://dummyimage.com/200",
      locatedAt: "area5",
      openedOnDays: []
    },

  ];

  constructor(@Inject(DOCUMENT) private document:Document,
              @Inject(WINDOW) private window) {
  }


  /*constructor(){}*/

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 250) {
      this.solidColored = true;
    } else if (number < 250) {
      this.solidColored = false;
    }
  }
}
