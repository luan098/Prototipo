import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

interface AdjustInterface extends MysqlConnectionOptions {
  autoLoadEntities: boolean;
}

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}

  getServerInfo() {
    const dtOptions = this.dataSource.options as AdjustInterface;
    return {
      database: {
        connected: this.dataSource.isInitialized,
        name: dtOptions.database,
        host: dtOptions.host,
        synchronize: dtOptions.synchronize,
        autoLoadEntities: dtOptions.autoLoadEntities,
        type: dtOptions.type,
      },
    };
  }
}
