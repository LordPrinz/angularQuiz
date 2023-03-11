import { Component, OnInit } from '@angular/core';
import { optionType } from 'types/optionType';
import { StateService } from './../state.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  public animals: optionType[] | null = null;

  public isCheckmode: boolean = false;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.state$.subscribe((newState) => {
      this.animals = newState.filter((thing) => thing.selectedTo == 'animal');
    });
    this.state.modeState$.subscribe((newState) => {
      this.isCheckmode = newState;
    });
  }
}
