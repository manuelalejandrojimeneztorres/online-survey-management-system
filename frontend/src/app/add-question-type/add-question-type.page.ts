import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionTypeService } from '../services/question-type.service';

@Component({
  selector: 'app-add-question-type',
  templateUrl: './add-question-type.page.html',
  styleUrls: ['./add-question-type.page.scss'],
})
export class AddQuestionTypePage implements OnInit {

  questionTypeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private questionTypeService: QuestionTypeService, private router: Router) {
    this.questionTypeForm = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createQuestionType() {
    if (this.questionTypeForm.valid) {
      console.log('Valid form:', this.questionTypeForm.value);
      this.questionTypeService.createQuestionType(this.questionTypeForm.value).subscribe(response => {
        this.router.navigate(['/question-types']);
      })
    } else {
      console.log('Invalid form');
    }
  }

  getFormControl(control: string) {
    return this.questionTypeForm.get(control);
  }

}
