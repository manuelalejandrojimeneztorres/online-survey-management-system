import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyStatusService } from '../services/survey-status.service';
import { SurveyStatusInterface } from '../interfaces/survey-status.interface';

@Component({
  selector: 'app-update-survey-status',
  templateUrl: './update-survey-status.page.html',
  styleUrls: ['./update-survey-status.page.scss'],
})
export class UpdateSurveyStatusPage implements OnInit {

  surveyStatusForm: FormGroup;
  surveyStatusId: any;

  constructor(private formBuilder: FormBuilder, private surveyStatusService: SurveyStatusService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.surveyStatusForm = this.formBuilder.group({
      status: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.surveyStatusId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadSurveyStatus();
  }

  loadSurveyStatus() {
    this.surveyStatusService.getSurveyStatusById(this.surveyStatusId).subscribe((response: SurveyStatusInterface) => {
      this.surveyStatusForm.patchValue({
        status: response.status
      });
    });
  }

  updateSurveyStatus() {
    const updatedSurveyStatus = this.surveyStatusForm.value;
    this.surveyStatusService.updateSurveyStatus(this.surveyStatusId, updatedSurveyStatus).subscribe(() => {
      this.router.navigate(['/survey-statuses']);
    });
  }

  getFormControl(control: string) {
    return this.surveyStatusForm.get(control);
  }

}
