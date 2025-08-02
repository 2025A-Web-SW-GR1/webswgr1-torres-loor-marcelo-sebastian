import { DataSource } from 'typeorm';
import { Casa } from './casa/entities/casa.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [Casa],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
