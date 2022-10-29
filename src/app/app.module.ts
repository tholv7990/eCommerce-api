import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AuthModule } from 'src/libs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

export const routes: Routes = [
  {
    path: '/auth',
    module: AuthModule,
  },
];

@Module({
  imports: [AuthModule, RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
