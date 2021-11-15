import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsComponent } from './secret/congrats/congrats.component';
import { EndComponent } from './secret/end/end.component';
import { HomeComponent } from './secret/home/home.component';
import { IntroductionComponent } from './secret/introduction/introduction.component';
import { QuizComponent } from './secret/quiz/quiz.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'secret/introduction', component : IntroductionComponent, data: {animation: 'normal'}},
  {path : 'secret/end', component : EndComponent, data: {animation: 'longer'}},
  {path : 'secret/ending', component : CongratsComponent, data: {animation: 'longer'}},
  {path : 'secret/quiz', component : QuizComponent, data: {animation: 'normal'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
