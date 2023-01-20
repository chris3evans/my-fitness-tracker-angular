import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutsViewComponent } from './workouts-view/workouts-view.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';

@NgModule({
  declarations: [AppComponent, WorkoutsViewComponent, WorkoutFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
