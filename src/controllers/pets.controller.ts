import { Controller, Get, Post, Body } from '@nestjs/common';
import { PetsService } from 'src/services/pets.service';
import { Pet } from 'src/domain/pet.schema';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Post()
  async createPet(@Body('name') name: string): Promise<Pet> {
    return this.petsService.createPet(name);
  }

  @Get()
  async findAllPets(): Promise<Pet[]> {
    return this.petsService.findAllPets();
  }
}
