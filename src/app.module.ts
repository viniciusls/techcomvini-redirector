import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelController } from './channel/channel.controller';
import { VideosController } from './videos/videos.controller';

@Module({
  imports: [],
  controllers: [AppController, ChannelController, VideosController],
  providers: [AppService],
})
export class AppModule {}
