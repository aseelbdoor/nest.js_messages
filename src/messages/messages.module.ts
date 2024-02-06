import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  // things can be used as dependancies for other classes
  providers: [MessagesService, MessageRepository]
})
export class MessagesModule {}
