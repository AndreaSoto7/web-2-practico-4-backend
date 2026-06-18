import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaControllerController } from './persona-controller/persona-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonaControllerController],
  providers: [AppService],
})
export class AppModule {}
