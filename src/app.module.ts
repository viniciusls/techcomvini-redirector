import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelController } from './channel/channel.controller';
import { VideosController } from './videos/videos.controller';
import { HealthCheckController } from './health-check/health-check.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ChannelController,
    VideosController,
    HealthCheckController,
  ],
  providers: [AppService],
})
export class AppModule {}
