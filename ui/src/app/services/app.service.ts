import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject,Observable } from 'rxjs';

/**
 * Class representing application service.
 *
 * @class AppService.
 */
@Injectable()
export class AppService {
  private serviceUrl = '/api/summary';

  constructor(private http: HttpClient) {
  }

  /**
   * Makes a http get request to retrieve the welcome message from the backend service.
   */
  public getWelcomeMessage() {
    return this.http.get(this.serviceUrl).pipe(
      map(response => response)
    );
  }

 public isNonEmptyString(str: string): boolean {
  return str && str.length > 0;
}

}
