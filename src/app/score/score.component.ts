import { Component, OnInit } from '@angular/core';
import { optionType } from 'types/optionType';
import { StateService } from '../state.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  public isCheckMode: boolean = false;
  public counter: number = 0;

  public currentState: optionType[] | null = null;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.modeState$.subscribe((state) => {
      this.isCheckMode = state;
      this.counter = 0;
      if (!state) {
        return;
      }

      this.currentState!.forEach((thing) => {
        if (thing.correct === thing.selectedTo) {
          this.counter++;
        }
      });
    });
    this.state.state$.subscribe((state) => (this.currentState = state));
  }
}
