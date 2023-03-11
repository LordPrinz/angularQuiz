import { Component, OnInit } from '@angular/core';
import { optionType } from 'types/optionType';
import { StateService } from './../state.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  template: `{{ state.options }}`,
})
export class AnimalsComponent implements OnInit {
  public animals: optionType[] | null = null;

  constructor(private state: StateService) {}

  ngOnInit(): void {}
}
