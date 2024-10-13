import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.page.html',
  styleUrls: ['./add-survey.page.scss'],
})
export class AddSurveyPage implements OnInit {

  surveyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private surveyService: SurveyService, private router: Router) {
    this.surveyForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      startDate: ['', Validators.compose([Validators.required])],
      endDate: [''],
      minResponses: [''],
      maxResponses: [''],
      surveyStatusID: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createSurvey() {
    if (this.surveyForm.valid) {
      console.log('Valid form:', this.surveyForm.value);
      this.surveyService.createSurvey(this.surveyForm.value).subscribe(response => {
        this.router.navigate(['/surveys']);
      })
    } else {
      console.log('Invalid form');
    }
  }

  getFormControl(control: string) {
    return this.surveyForm.get(control);
  }

}
