import { Component} from '@angular/core';
import { FormArray, FormControl, FormGroup, AbstractControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})

//ORIGINAL
// export class NewCourseFormComponent implements OnInit {
//   categories = [
//     {id: 1, name: 'Development' },
//     {id: 2, name: 'Art' },
//     {id: 3, name: 'Languages' },
//   ]
//   constructor() { }

//   submit(course: any) {
//     console.log(course)
//   }

//   ngOnInit(): void {
//   }

// }
//End Original


//FormArray Example Starts
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
   this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
//FormArray Example Ends

