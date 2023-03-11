import { Injectable } from '@angular/core';
import { optionType } from 'types/optionType';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new Subject<optionType[]>();
  state$ = this.stateSubject.asObservable();

  constructor() {}

  setState(newState: optionType[]) {
    this.stateSubject.next(newState);
  }
}
