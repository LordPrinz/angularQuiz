import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnimalsComponent } from './animals/animals.component';
import { PlantsComponent } from './plants/plants.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    AnimalsComponent,
    PlantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
