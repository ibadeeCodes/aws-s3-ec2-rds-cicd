import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catsRepository.findOneBy({ id });
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const cat = await this.findOne(id);
    const updatedCat = this.catsRepository.merge(cat, updateCatDto);
    return await this.catsRepository.save(updatedCat);
  }

  async remove(id: string): Promise<void> {
    const result = await this.catsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
  }
}
