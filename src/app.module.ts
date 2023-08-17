import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './domain/pet.schema';
import { PetsRepository } from './frameworks/infrastructure/repositories/pets.repository';
import { PetsService } from './services/pets.service';
import { PetsController } from './controllers/pets.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://pupitAdmin:L4Myx7TQ1J8viPZ2@pupitdev.xnbyqha.mongodb.net/?retryWrites=true&w=majority',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]),
  ],
  controllers: [PetsController],
  providers: [PetsService, PetsRepository],
})
export class AppModule {}
