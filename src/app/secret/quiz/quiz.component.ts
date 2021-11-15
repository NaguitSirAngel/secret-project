import { Component, OnInit } from '@angular/core';
import { Question } from './model/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  score: number = 0;
  cycle: number = 10;
  currentQuestion: Question;
  quizMode: boolean = true;

  numbers: number[] = [0,1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
    this.currentQuestion = QUESTIONS_DATA[0];
    this.numbers = this.numbers.filter(i => i !== 0)
  }

  gameEngine (): void {
    //If there are still questions
    if(this.numbers.length > 0){
        let item = this.numbers[Math.floor(Math.random()*this.numbers.length)];
        this.currentQuestion = QUESTIONS_DATA[item];
        this.numbers = this.numbers.filter(i => i !== item)
    } else {
      this.quizMode = false;
    }

  }

  checkAnswer(selectedAnswer): void {
    if(selectedAnswer == this.currentQuestion.answer){
      this.score +=1;
    }
    this.gameEngine();
  }

}

const QUESTIONS_DATA: Question[] = [
  {question: 'What is the name of my creator?', answer: 'Sir Angel', choices: ['Sir Angel','Tanner Buchanan','Cole Sprouse','Justine Bieber']},
  {question: 'Where did you meet him the first time?', answer: 'PHS', choices: ['Computer Shop','SM','PHS','Assumption']},
  {question: 'What did you ask him when you guys first met?', answer: 'Paypayan moko', choices: ['Hello','Penge Airheads','Pabili Milo','Paypayan moko']},
  {question: 'In what year in HS you guys met?', answer: '2nd Yr', choices: ['1st Yr','2nd Yr','4th Yr','Third Yr']},
  {question: 'What is my creator favourite hobby?', answer: 'Video Games', choices: ['Reading','Cooking','Gym','Video Games']},
  {question: 'When did you guys first dated officially?', answer: '07/24', choices: ['07/24','07/03','04/29','09/14']},
  {question: 'When you guys broke up and started to talk again where d5d you usually meet?', answer: 'Seven Eleven', choices: ['Jollibee','SM','Seven Eleven','School']},
  {question: 'Is my creator handsome?', answer: 'YES', choices: ['YES','MAYBE','NO','NOT REALLY']},
  {question: 'Do you wish to spend the rest of your life with him?', answer: 'YES', choices: ['YES','UNDECIDED','MAYBE','NO']},
  {question: 'Would you let my creator play video games when you are around?', answer: 'YES', choices: ['YES','NO','MAYBE','NOT REALLY']},
];
