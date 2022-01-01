import { Controller, Get, Param } from '@nestjs/common';

@Controller('videos')
export class VideosController {
  @Get(':id')
  findOne(@Param() params): string {
    return `It should redirect to video ${params.id}`;
  }
}
