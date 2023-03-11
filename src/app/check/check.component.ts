import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent implements OnInit {
  public isAllSelected: boolean = false;

  activateCheckMode() {
    this.state.activateMode();
  }

  constructor(private state: StateService) {}
  ngOnInit(): void {
    this.state.state$.subscribe((newState) => {
      this.isAllSelected = !newState.find((item) => !item.selectedTo);
    });
  }
}
