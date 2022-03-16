import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoClient } from 'mongodb';
import { DatabaseModule } from './database/database.module';

//----testear conexión ----
const uri ="mongodb+srv://admin:Ostruca1203@cluster0.rsnsq.mongodb.net/datosprueba?authSource=admin&replicaSet=atlas-z5nctz-shard-0&w=majority&readPreference=primary";
const client = new MongoClient(uri);
async function run(){
  await client.connect();
  const database = client.db('datosprueba');
  const pruebaCollection = database.collection('supermercados');
  const result = await pruebaCollection.find().limit(2).toArray();
  console.log(result);
}
run();
//----testear conexión ----

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
