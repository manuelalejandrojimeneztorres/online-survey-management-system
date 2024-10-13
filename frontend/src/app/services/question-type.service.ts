import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { QuestionTypeInterface } from '../interfaces/question-type.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  private questionTypesEndpoint = 'http://localhost:8080/api/v1/question-types';

  constructor(private httpClient: HttpClient) { }

  getQuestionTypes() {
    return this.httpClient.get(this.questionTypesEndpoint);
  }

  createQuestionType(questionType: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("type", questionType.type);

    return this.httpClient.post(this.questionTypesEndpoint, body.toString(), { headers });
  }

  deleteQuestionType(id: any) {
    return this.httpClient.delete(`${this.questionTypesEndpoint}/${id}`);
  }

  getQuestionTypeById(id: any) {
    return this.httpClient.get<QuestionTypeInterface>(`${this.questionTypesEndpoint}/${id}`);
  }

  updateQuestionType(id: any, questionType: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("type", questionType.type);

    return this.httpClient.put(`${this.questionTypesEndpoint}/${id}`, body.toString(), { headers });
  }

}
