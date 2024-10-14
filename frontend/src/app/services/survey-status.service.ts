import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SurveyStatusInterface } from '../interfaces/survey-status.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyStatusService {

  private surveyStatusesEndpoint = 'http://localhost:8080/api/v1/survey-statuses';

  constructor(private httpClient: HttpClient) { }

  /*   getSurveyStatuses() {
      return this.httpClient.get(this.surveyStatusesEndpoint);
    } */

  getSurveyStatuses(): Observable<SurveyStatusInterface[]> {
    return this.httpClient.get<SurveyStatusInterface[]>(this.surveyStatusesEndpoint);
  }

  createSurveyStatus(surveyStatus: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("status", surveyStatus.status);

    return this.httpClient.post(this.surveyStatusesEndpoint, body.toString(), { headers });
  }

  deleteSurveyStatus(id: any) {
    return this.httpClient.delete(`${this.surveyStatusesEndpoint}/${id}`);
  }

  getSurveyStatusById(id: any) {
    return this.httpClient.get<SurveyStatusInterface>(`${this.surveyStatusesEndpoint}/${id}`);
  }

  updateSurveyStatus(id: any, surveyStatus: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("status", surveyStatus.status);

    return this.httpClient.put(`${this.surveyStatusesEndpoint}/${id}`, body.toString(), { headers });
  }

}
