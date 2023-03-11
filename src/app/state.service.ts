import { Injectable } from '@angular/core';
import { optionType } from 'types/optionType';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public options: optionType[] = [
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
}
