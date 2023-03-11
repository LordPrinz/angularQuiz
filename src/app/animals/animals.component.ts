import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  template: `{{ state.myGlobalState }}`,
})
export class AnimalsComponent implements OnInit {
  constructor(private state: StateService) {}

  ngOnInit(): void {}
}
