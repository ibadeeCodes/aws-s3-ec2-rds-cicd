import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './entities/dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogsRepository: Repository<Dog>,
  ) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const dog = this.dogsRepository.create(createDogDto);
    return await this.dogsRepository.save(dog);
  }

  async findAll(): Promise<Dog[]> {
    return await this.dogsRepository.find();
  }

  async findOne(id: string): Promise<Dog> {
    const dog = await this.dogsRepository.findOneBy({ id });
    if (!dog) {
      throw new NotFoundException(`Dog with ID ${id} not found`);
    }
    return dog;
  }

  async update(id: string, updateDogDto: UpdateDogDto): Promise<Dog> {
    const dog = await this.findOne(id);
    const updatedDog = this.dogsRepository.merge(dog, updateDogDto);
    return await this.dogsRepository.save(updatedDog);
  }

  async remove(id: string): Promise<void> {
    const result = await this.dogsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Dog with ID ${id} not found`);
    }
  }
}
