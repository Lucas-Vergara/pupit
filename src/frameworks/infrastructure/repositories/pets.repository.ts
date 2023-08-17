import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet } from 'src/domain/pet.schema';

@Injectable()
export class PetsRepository {
  constructor(@InjectModel(Pet.name) private petModel: Model<Pet>) {}

  async createPet(name: string): Promise<Pet> {
    const createdPet = new this.petModel({ name });
    return createdPet.save();
  }

  async findAllPets(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }
}
