import { Controller, Get, Res } from '@nestjs/common';

@Controller('channel')
export class ChannelController {
  @Get()
  redirect(@Res() res) {
    return res.redirect(process.env.CHANNEL_URL);
  }
}
