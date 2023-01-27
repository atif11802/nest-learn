import { Controller,Get,Body,Post, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';

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

  @Post("/create")

  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  createQuiz(@Body() quiz  : CreateQuizDto) {
    return {
      data : quiz
    }
  }

}
