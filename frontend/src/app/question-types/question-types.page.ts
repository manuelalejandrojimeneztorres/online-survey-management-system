import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { QuestionTypeService } from '../services/question-type.service';

import { QuestionTypeInterface } from '../interfaces/question-type.interface';

@Component({
  selector: 'app-question-types',
  templateUrl: './question-types.page.html',
  styleUrls: ['./question-types.page.scss'],
})
export class QuestionTypesPage implements OnInit {

  // questionTypes: any = [];
  questionTypes: QuestionTypeInterface[] = [];

  constructor(private questionTypeService: QuestionTypeService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.loadQuestionTypes();
  }

  ionViewWillEnter() {
    this.loadQuestionTypes();
  }

  loadQuestionTypes() {
    this.questionTypeService.getQuestionTypes().subscribe((data: QuestionTypeInterface[]) => {
      this.questionTypes = data;
    });
  }

  goToAddQuestionType() {
    this.router.navigate(['/add-question-type']);
  }

  updateQuestionType(id: any) {
    this.router.navigate(['/update-question-type', id]);
  }

  async presentDeleteAlert(questionType: QuestionTypeInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the question type <strong>${questionType.type}</strong>?`,
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
            this.deleteQuestionType(questionType.id);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteQuestionType(id: any) {
    this.questionTypeService.deleteQuestionType(id).subscribe(types => {
      this.loadQuestionTypes();
    })
  }

}
