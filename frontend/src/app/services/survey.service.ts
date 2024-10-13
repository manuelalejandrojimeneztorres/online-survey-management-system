import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SurveyInterface } from '../interfaces/survey.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveysEndpoint = 'http://localhost:8080/api/v1/surveys';

  constructor(private httpClient: HttpClient) { }

  /*   getSurveys() {
      return this.httpClient.get(this.surveysEndpoint);
    } */

  getSurveys(): Observable<SurveyInterface[]> {
    return this.httpClient.get<SurveyInterface[]>(this.surveysEndpoint);
  }

  createSurvey(survey: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("name", survey.name);
    body.append("description", survey.description);
    body.append("startDate", survey.startDate);
    body.append("endDate", survey.endDate);
    body.append("minResponses", survey.minResponses);
    body.append("maxResponses", survey.maxResponses);
    body.append("surveyStatusID", survey.surveyStatusID);

    return this.httpClient.post(this.surveysEndpoint, body.toString(), { headers });
  }

  deleteSurvey(id: any) {
    return this.httpClient.delete(`${this.surveysEndpoint}/${id}`);
  }

  getSurveyById(id: any) {
    return this.httpClient.get<SurveyInterface>(`${this.surveysEndpoint}/${id}`);
  }

  updateSurvey(id: any, survey: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("name", survey.name);
    body.append("description", survey.description);
    body.append("startDate", survey.startDate);
    body.append("endDate", survey.endDate);
    body.append("minResponses", survey.minResponses);
    body.append("maxResponses", survey.maxResponses);
    body.append("surveyStatusID", survey.surveyStatusID);

    return this.httpClient.put(`${this.surveysEndpoint}/${id}`, body.toString(), { headers });
  }

}
