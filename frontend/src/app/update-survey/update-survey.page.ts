import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../services/survey.service';
import { SurveyInterface } from '../interfaces/survey.interface';

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.page.html',
  styleUrls: ['./update-survey.page.scss'],
})
export class UpdateSurveyPage implements OnInit {

  surveyForm: FormGroup;
  surveyId: any;

  constructor(private formBuilder: FormBuilder, private surveyService: SurveyService, private router: Router, private activatedRoute: ActivatedRoute) {
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
    this.surveyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadSurvey();
  }

  loadSurvey() {
    this.surveyService.getSurveyById(this.surveyId).subscribe((response: SurveyInterface) => {
      this.surveyForm.patchValue({
        name: response.name,
        description: response.description,
        startDate: response.startDate,
        endDate: response.endDate,
        minResponses: response.minResponses,
        maxResponses: response.maxResponses,
        surveyStatusID: response.surveyStatusID
      });
    });
  }

  updateSurvey() {
    const updatedSurvey = this.surveyForm.value;
    this.surveyService.updateSurvey(this.surveyId, updatedSurvey).subscribe(() => {
      this.router.navigate(['/surveys']);
    });
  }

  getFormControl(control: string) {
    return this.surveyForm.get(control);
  }

}
