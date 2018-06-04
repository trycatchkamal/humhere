import {baseuiobject} from '../models/baseuiobject'

export interface Space extends baseuiobject {
  name:string;
  imageUrl:string;
  locatedAt:string;
  openedOnDays:string[];
}
