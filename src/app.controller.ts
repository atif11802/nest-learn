import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get("/something")
  getSomething(): string {
    return this.appService.getSomething();
  }

  @Get("/name/:name")
    displayName(@Param() params): string {
    const { name } = params;
    return this.appService.displayName(name);
    }

    @Get("/name/:name/:age")
    displayNameAndAge(@Param() params): string {
    const { name, age } = params;
    return `Hello ${name}, you are ${age} years old.`
    }
  



}
