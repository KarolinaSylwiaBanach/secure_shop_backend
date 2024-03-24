import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './api/users/users.controller';
import { UsersService } from './api/users/users.service';
import { TransactionsController } from './api/transactions/transactions.controller';
import { TransactionsService } from './api/transactions/transactions.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, TransactionsController],
  providers: [AppService, UsersService, TransactionsService],
})
export class AppModule { }
