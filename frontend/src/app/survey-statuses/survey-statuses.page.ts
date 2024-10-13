import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SurveyStatusService } from '../services/survey-status.service';

@Component({
  selector: 'app-survey-statuses',
  templateUrl: './survey-statuses.page.html',
  styleUrls: ['./survey-statuses.page.scss'],
})
export class SurveyStatusesPage implements OnInit {

  surveyStatuses: any = [];

  constructor(private surveyStatusService: SurveyStatusService, private router: Router) { }

  ngOnInit() {
    this.loadSurveyStatuses();
  }

  ionViewWillEnter() {
    this.loadSurveyStatuses();
  }

  loadSurveyStatuses() {
    this.surveyStatusService.getSurveyStatuses().subscribe(statuses => {
      this.surveyStatuses = statuses;
    });
  }

  goToAddSurveyStatus() {
    this.router.navigate(['/add-survey-status']);
  }

  updateSurveyStatus(id: any) {
    this.router.navigate(['/update-survey-status', id]);
  }

  deleteSurveyStatus(id: any) {
    this.surveyStatusService.deleteSurveyStatus(id).subscribe(statuses => {
      this.loadSurveyStatuses();
    })
  }

}
