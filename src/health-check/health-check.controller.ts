import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  @HttpCode(200)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  index() {}
}
