import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css'],
})
export class WorkoutFormComponent {
  constructor(private formBuilder: FormBuilder, private Api: ApiService) {}
  workoutForm = this.formBuilder.group({
    workoutName: '',
    workoutType: '',
  });

  ngOnInit(): void {
    // this.workoutForm.valueChanges.subscribe((result) => {
    //   console.log(result);
    // });
  }

  handleSubmit() {
    this.Api.postWorkout(this.workoutForm.value).subscribe((result) => {
      console.log(result, 'result');
    });
  }
}
