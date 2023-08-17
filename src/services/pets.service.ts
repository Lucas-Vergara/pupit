import { Injectable } from '@nestjs/common';
import { PetsRepository } from 'src/frameworks/infrastructure/repositories/pets.repository';
import { Pet } from 'src/domain/pet.schema';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}

  async createPet(name: string): Promise<Pet> {
    return this.petsRepository.createPet(name);
  }

  async findAllPets(): Promise<Pet[]> {
    return this.petsRepository.findAllPets();
  }
}
