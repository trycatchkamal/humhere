import { Component, OnInit } from '@angular/core';
import {Space} from "../../models/space";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

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


  constructor() { }

  ngOnInit() {
  }

}
