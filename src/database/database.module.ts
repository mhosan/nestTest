/* eslint-disable prettier/prettier */
import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

//const pruebaCollection = database.collection('supermercados');
//const result = await pruebaCollection.find().limit(2).toArray();

@Global()
@Module({
    providers: [
        {   
            provide: 'MONGO',
            useFactory: async () => {
                const uri ="mongodb+srv://admin:Ostruca1203@cluster0.rsnsq.mongodb.net/datosprueba?authSource=admin&replicaSet=atlas-z5nctz-shard-0&w=majority&readPreference=primary";
                const client = new MongoClient(uri);
                await client.connect();
                const database = client.db('datosprueba');
                return database;  //lo que queda como inyectable para cada clase es "database" y es singleton
            }
        }
    ],
    exports: ['MONGO']
})
export class DatabaseModule {}
