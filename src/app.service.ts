/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  
  constructor(@Inject('MONGO') private database: Db) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDatos(){
    const coleccProductos = this.database.collection('supermercados');
    return coleccProductos.find().limit(2).toArray();
    
  }
}
