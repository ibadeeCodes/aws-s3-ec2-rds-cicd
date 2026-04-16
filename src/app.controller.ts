import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { S3Service } from './s3/s3.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataSource: DataSource,
    private readonly s3Service: S3Service,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  async health() {
    throw new Error('Intentional bug for v4.6 rollback testing');

    // check DB connection
    await this.dataSource.query('SELECT 1');

    // check external services (S3)
    await this.s3Service.checkHealth();

    return {
      status: 'ok',
      db: 'connected',
    };
  }
}
