import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = process.env.MSG || 'wow it works 004';
    return `Hello World From NestJS! - ${msg}`;
  }
}
