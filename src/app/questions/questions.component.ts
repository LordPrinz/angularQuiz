import { Component, OnInit } from '@angular/core';
import { randomIndex } from 'src/utils/random';
import { optionType } from 'types/optionType';
import { StateService } from '../state.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  template: `{{ state.myGlobalState }}`,
})
export class QuestionsComponent implements OnInit {
  public currentThing: optionType | null = null;
  public currentState = null;

  drawNext(state: StateService) {
    const notSelected = state.options.filter((option) => !option.selectedTo);
    const index = randomIndex(notSelected.length - 1);
    this.currentThing = notSelected[index];
  }

  constructor(private state: StateService) {
    const notSelected = state.options.filter((option) => !option.selectedTo);

    const index = randomIndex(notSelected.length);
    console.log(index);
    this.currentThing = notSelected[index];
  }

  ngOnInit(): void {}
}
