import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import {StorageKeys} from "../models/storagekeys";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private selectedCitySubject:BehaviorSubject<string>= new BehaviorSubject<string>("");

  get selectedCity() {
    return this.selectedCitySubject.asObservable();
  }

  changeCity(city:string):void{
    this.selectedCitySubject.next(city);
    this.storageService.setItem(StorageKeys.CITY_STORAGE_KEY, city).subscribe(() => '');
  }

  constructor(private storageService:LocalStorage) {
    this.storageService.getItem<string>(StorageKeys.CITY_STORAGE_KEY).subscribe((city) => {
      console.log(city+' stor loc');
      this.selectedCitySubject.next(city);
    });
  }
}
