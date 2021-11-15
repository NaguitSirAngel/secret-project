import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './secret/home/home.component';
import { QuizComponent } from './secret/quiz/quiz.component';
import { IntroductionComponent } from './secret/introduction/introduction.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EndComponent } from './secret/end/end.component';
import { CongratsComponent } from './secret/congrats/congrats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    IntroductionComponent,
    EndComponent,
    CongratsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
