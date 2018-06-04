import { Component, OnInit,Input } from '@angular/core';
import {Space} from "../../models/space";

@Component({
  selector: 'app-spaceexhibit',
  templateUrl: './spaceexhibit.component.html',
  styleUrls: ['./spaceexhibit.component.scss']
})
export class SpaceexhibitComponent implements OnInit {

  @Input()
  space:Space;

  @Input()
  actionsHidden:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
