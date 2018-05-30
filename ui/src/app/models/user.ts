import {baseuiobject} from '../models/baseuiobject'

export interface User extends baseuiobject {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}
