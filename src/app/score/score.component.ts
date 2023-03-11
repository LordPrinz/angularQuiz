import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  public isCheckMode: boolean = false;
  public counter: number = 0;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.modeState$.subscribe((state) => (this.isCheckMode = state));
  }
}
