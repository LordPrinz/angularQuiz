import { Component, OnInit } from '@angular/core';
import { optionType } from 'types/optionType';
import { StateService } from '../state.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
})
export class PlantsComponent implements OnInit {
  public plants: optionType[] | null = null;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.state$.subscribe((newState) => {
      this.plants = newState.filter((thing) => thing.selectedTo == 'plant');
    });
  }
}
