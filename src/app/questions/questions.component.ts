import { Component, OnInit } from '@angular/core';
import { randomIndex } from 'src/utils/random';
import { optionType } from 'types/optionType';
import { StateService } from '../state.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  public currentThing: optionType | null = null;
  public currentState: optionType[] | null = null;

  drawNext() {
    const notSelected = this.currentState!.filter(
      (option) => !option.selectedTo
    );
    const index = randomIndex(notSelected.length);
    this.currentThing = notSelected[index];
  }

  setAsAnimal() {
    const index = this.currentThing?.id!;
    this.currentState![index].selectedTo = 'animal';
    this.state.setState(this.currentState!);

    this.drawNext();
  }

  setAsPlant() {
    const index = this.currentThing?.id!;
    this.currentState![index].selectedTo = 'plant';
    this.state.setState(this.currentState!);

    this.drawNext();
  }

  constructor(private state: StateService) {
    this.currentState = this.state.defaultState;
    this.drawNext();
  }

  ngOnInit(): void {
    this.state.state$.subscribe((newState) => {
      this.currentState = newState;

      this.drawNext();
    });
  }
}
