import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionTypeService } from '../services/question-type.service';

@Component({
  selector: 'app-question-types',
  templateUrl: './question-types.page.html',
  styleUrls: ['./question-types.page.scss'],
})
export class QuestionTypesPage implements OnInit {

  questionTypes: any = [];

  constructor(private questionTypeService: QuestionTypeService, private router: Router) { }

  ngOnInit() {
    this.loadQuestionTypes();
  }

  ionViewWillEnter() {
    this.loadQuestionTypes();
  }

  loadQuestionTypes() {
    this.questionTypeService.getQuestionTypes().subscribe(types => {
      this.questionTypes = types;
    });
  }

  goToAddQuestionType() {
    this.router.navigate(['/add-question-type']);
  }

  updateQuestionType(id: any) {
    this.router.navigate(['/update-question-type', id]);
  }

  deleteQuestionType(id: any) {
    this.questionTypeService.deleteQuestionType(id).subscribe(types => {
      this.loadQuestionTypes();
    })
  }

}
