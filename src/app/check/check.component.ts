import { Component, OnInit } from '@angular/core';
import { optionType } from 'types/optionType';
import { StateService } from '../state.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent implements OnInit {
  public isAllSelected: boolean = false;

  public stateTemp: optionType[] | null = null;

  activateCheckMode() {
    this.state.activateMode();
  }

  reset() {
    this.state.deactivateMode();

    const resetedState = this.stateTemp!.map((state) => {
      state.selectedTo = null;
      return state;
    });

    this.state.setState(resetedState);
  }

  constructor(private state: StateService) {}
  ngOnInit(): void {
    this.state.state$.subscribe((newState) => {
      this.isAllSelected = !newState.find((item) => !item.selectedTo);
      this.stateTemp = newState;
    });
  }
}
