import { Component, OnInit } from '@angular/core';
import { randomIndex } from 'src/utils/random';
import { optionType } from 'types/optionType';
import { StateService } from '../state.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  template: `{{ state.options }}`,
})
export class QuestionsComponent implements OnInit {
  public currentThing: optionType | null = null;

  // drawNext() {
  //   const notSelected = this.state.options.filter(
  //     (option) => !option.selectedTo
  //   );
  //   const index = randomIndex(notSelected.length);
  //   this.currentThing = notSelected[index];
  // }

  // setAsAnimal() {
  //   const index = this.currentThing?.id!;
  //   this.state.options[index].selectedTo = 'animal';

  //   this.drawNext();
  // }

  // setAsPlant() {
  //   const index = this.currentThing?.id!;
  //   this.state.options[index].selectedTo = 'plant';

  //   this.drawNext();
  // }

  // constructor(private state: StateService) {
  //   this.drawNext();
  // }

  ngOnInit(): void {}
}
