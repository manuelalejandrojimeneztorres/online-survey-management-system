import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionTypeService } from '../services/question-type.service';
import { QuestionTypeInterface } from '../interfaces/question-type.interface';

@Component({
  selector: 'app-update-question-type',
  templateUrl: './update-question-type.page.html',
  styleUrls: ['./update-question-type.page.scss'],
})
export class UpdateQuestionTypePage implements OnInit {

  questionTypeForm: FormGroup;
  questionTypeId: any;

  constructor(private formBuilder: FormBuilder, private questionTypeService: QuestionTypeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.questionTypeForm = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.questionTypeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadQuestionType();
  }

  loadQuestionType() {
    this.questionTypeService.getQuestionTypeById(this.questionTypeId).subscribe((response: QuestionTypeInterface) => {
      this.questionTypeForm.patchValue({
        type: response.type
      });
    });
  }

  updateQuestionType() {
    const updatedQuestionType = this.questionTypeForm.value;
    this.questionTypeService.updateQuestionType(this.questionTypeId, updatedQuestionType).subscribe(() => {
      this.router.navigate(['/question-types']);
    });
  }

  getFormControl(control: string) {
    return this.questionTypeForm.get(control);
  }

}
