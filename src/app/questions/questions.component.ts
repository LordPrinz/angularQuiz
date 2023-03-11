import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  template: `{{ state.myGlobalState }}`,
})
export class QuestionsComponent implements OnInit {
  public currentThing = null;

  constructor(private state: StateService) {
    const notSelected = state.options.filter((option) => !option.selectedTo);
  }

  ngOnInit(): void {}
}
