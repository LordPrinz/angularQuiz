import { Injectable } from '@angular/core';
import { optionType } from 'types/optionType';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public options: optionType[] = [
    {
      name: 'Słoń',
      correct: 'animal',
      selectedTo: null,
    },
    {
      name: 'Jeleń',
      correct: 'animal',
      selectedTo: null,
    },
    {
      name: 'Róża',
      correct: 'plant',
      selectedTo: null,
    },
    {
      name: 'Słonecznik',
      correct: 'plant',
      selectedTo: null,
    },
  ];
}
