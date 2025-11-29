import { Module } from '@nestjs/common';
import { HelloCommand } from './commands/hello.command';

@Module({
  imports: [HelloCommand],
  controllers: [],
  providers: [],
})
export class AppModule {}
