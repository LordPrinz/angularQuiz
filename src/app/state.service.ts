import { Injectable } from '@angular/core';
import { optionType } from 'types/optionType';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new Subject<optionType[]>();
  state$ = this.stateSubject.asObservable();
  public defaultState: optionType[] = [
    {
      id: 0,
      name: 'Słoń',
      correct: 'animal',
      selectedTo: null,
    },
    {
      id: 1,
      name: 'Jeleń',
      correct: 'animal',
      selectedTo: null,
    },
    {
      id: 2,
      name: 'Róża',
      correct: 'plant',
      selectedTo: null,
    },
    {
      id: 3,
      name: 'Słonecznik',
      correct: 'plant',
      selectedTo: null,
    },
  ];

  constructor() {
    this.stateSubject.next(this.defaultState);
  }

  setState(newState: optionType[]) {
    this.stateSubject.next(newState);
  }
}
