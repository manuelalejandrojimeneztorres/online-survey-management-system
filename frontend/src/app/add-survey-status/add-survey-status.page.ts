import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SurveyStatusService } from '../services/survey-status.service';

@Component({
  selector: 'app-add-survey-status',
  templateUrl: './add-survey-status.page.html',
  styleUrls: ['./add-survey-status.page.scss'],
})
export class AddSurveyStatusPage implements OnInit {

  surveyStatusForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private surveyStatusService: SurveyStatusService, private router: Router) {
    this.surveyStatusForm = this.formBuilder.group({
      status: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createSurveyStatus() {
    if (this.surveyStatusForm.valid) {
      console.log('Valid form:', this.surveyStatusForm.value);
      this.surveyStatusService.createSurveyStatus(this.surveyStatusForm.value).subscribe(response => {
        this.router.navigate(['/survey-statuses']);
      })
    } else {
      console.log('Invalid form');
    }
  }

  getFormControl(control: string) {
    return this.surveyStatusForm.get(control);
  }

}
