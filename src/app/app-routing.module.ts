import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './secret/home/home.component';
import { IntroductionComponent } from './secret/introduction/introduction.component';
import { QuizComponent } from './secret/quiz/quiz.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'secret/introduction', component : IntroductionComponent, data: {animation: 'isRight'}},
  {path : 'secret/quiz', component : QuizComponent, data: {animation: 'isLeft'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
