import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cow } from './entities/cow.entity';
import { CreateCowDto } from './dto/create-cow.dto';
import { UpdateCowDto } from './dto/update-cow.dto';

@Injectable()
export class CowsService {
  constructor(
    @InjectRepository(Cow)
    private readonly cowsRepository: Repository<Cow>,
  ) {}

  async create(createCowDto: CreateCowDto): Promise<Cow> {
    const cow = this.cowsRepository.create(createCowDto);
    return await this.cowsRepository.save(cow);
  }

  async findAll(): Promise<Cow[]> {
    return await this.cowsRepository.find();
  }

  async findOne(id: string): Promise<Cow> {
    const cow = await this.cowsRepository.findOneBy({ id });
    if (!cow) {
      throw new NotFoundException(`Cow with ID ${id} not found`);
    }
    return cow;
  }

  async update(id: string, updateCowDto: UpdateCowDto): Promise<Cow> {
    const cow = await this.findOne(id);
    const updatedCow = this.cowsRepository.merge(cow, updateCowDto);
    return await this.cowsRepository.save(updatedCow);
  }

  async remove(id: string): Promise<void> {
    const result = await this.cowsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cow with ID ${id} not found`);
    }
  }
}
