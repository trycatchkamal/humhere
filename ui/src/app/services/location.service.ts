import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private selectedCitySubject:BehaviorSubject<string> = new BehaviorSubject<string>("");

  get selectedCity() {
    return this.selectedCitySubject.asObservable();
  }

  changeCity(city:string):void{
    this.selectedCitySubject.next(city);
  }
  constructor() { }
}
