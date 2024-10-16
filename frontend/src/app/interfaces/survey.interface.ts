export interface SurveyInterface {
    id?: number;
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    minResponses?: number;
    maxResponses?: number;
    surveyStatusId: number;
    createdAt?: string;
    updatedAt?: string;
}
