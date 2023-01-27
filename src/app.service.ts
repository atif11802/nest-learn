import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string {
    return 'Something 1';
  }

  displayName(name: string): string {
    return `Hello ${name}`;
  }


}
