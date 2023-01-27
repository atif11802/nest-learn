import { Controller,Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private readonly quizService: QuizService) {}

  @Get("/")
  getQuiz() {
    return [1,2,3,4,5,6,7,8,9,10]
  }

  @Get("/hello")
  getHello(): string {
    return this.quizService.getHello();
  }
}
