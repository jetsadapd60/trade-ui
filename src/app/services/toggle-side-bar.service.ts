import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSideBarService {

  private isSideBarToggle = new Subject<boolean>();

  constructor() { }

  get getToggleStatus$(): Observable<boolean> {
    return this.isSideBarToggle.asObservable();
  }

  set setToggleStatus(status: boolean) {
    this.isSideBarToggle.next(status);
  }

}
