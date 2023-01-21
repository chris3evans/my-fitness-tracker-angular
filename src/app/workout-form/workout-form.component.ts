import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css'],
})
export class WorkoutFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  workoutForm = this.formBuilder.group({
    workoutName: '',
    workoutType: '',
  });

  ngOnInit(): void {
    this.workoutForm.valueChanges.subscribe((result) => {
      console.log(result);
    });
  }

  handleSubmit() {
    console.log(this.workoutForm.value);
  }
}
