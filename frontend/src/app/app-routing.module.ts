import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'survey-statuses',
    loadChildren: () => import('./survey-statuses/survey-statuses.module').then(m => m.SurveyStatusesPageModule)
  },
  {
    path: 'add-survey-status',
    loadChildren: () => import('./add-survey-status/add-survey-status.module').then(m => m.AddSurveyStatusPageModule)
  },
  {
    path: 'update-survey-status/:id',
    loadChildren: () => import('./update-survey-status/update-survey-status.module').then(m => m.UpdateSurveyStatusPageModule)
  },
  {
    path: 'surveys',
    loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysPageModule)
  },
  {
    path: 'add-survey',
    loadChildren: () => import('./add-survey/add-survey.module').then(m => m.AddSurveyPageModule)
  },
  {
    path: 'update-survey/:id',
    loadChildren: () => import('./update-survey/update-survey.module').then(m => m.UpdateSurveyPageModule)
  },
  {
    path: 'question-types',
    loadChildren: () => import('./question-types/question-types.module').then(m => m.QuestionTypesPageModule)
  },
  {
    path: 'add-question-type',
    loadChildren: () => import('./add-question-type/add-question-type.module').then(m => m.AddQuestionTypePageModule)
  },
  {
    path: 'update-question-type/:id',
    loadChildren: () => import('./update-question-type/update-question-type.module').then(m => m.UpdateQuestionTypePageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsPageModule)
  },
  {
    path: 'question-options',
    loadChildren: () => import('./question-options/question-options.module').then(m => m.QuestionOptionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
