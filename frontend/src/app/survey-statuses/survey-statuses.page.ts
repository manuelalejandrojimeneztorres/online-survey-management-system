import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { SurveyStatusService } from '../services/survey-status.service';

import { SurveyStatusInterface } from '../interfaces/survey-status.interface';

@Component({
  selector: 'app-survey-statuses',
  templateUrl: './survey-statuses.page.html',
  styleUrls: ['./survey-statuses.page.scss'],
})
export class SurveyStatusesPage implements OnInit {

  // surveyStatuses: any = [];
  surveyStatuses: SurveyStatusInterface[] = [];

  constructor(private surveyStatusService: SurveyStatusService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.loadSurveyStatuses();
  }

  ionViewWillEnter() {
    this.loadSurveyStatuses();
  }

  loadSurveyStatuses() {
    this.surveyStatusService.getSurveyStatuses().subscribe((data: SurveyStatusInterface[]) => {
      this.surveyStatuses = data;
    });
  }

  goToAddSurveyStatus() {
    this.router.navigate(['/add-survey-status']);
  }

  updateSurveyStatus(id: any) {
    this.router.navigate(['/update-survey-status', id]);
  }

  async presentDeleteAlert(surveyStatus: SurveyStatusInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the survey status <strong>${surveyStatus.status}</strong>?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteSurveyStatus(surveyStatus.id);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteSurveyStatus(id: any) {
    this.surveyStatusService.deleteSurveyStatus(id).subscribe(statuses => {
      this.loadSurveyStatuses();
    })
  }

}
