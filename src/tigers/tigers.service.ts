import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tiger } from './entities/tiger.entity';
import { CreateTigerDto } from './dto/create-tiger.dto';
import { UpdateTigerDto } from './dto/update-tiger.dto';

@Injectable()
export class TigersService {
  constructor(
    @InjectRepository(Tiger)
    private readonly tigersRepository: Repository<Tiger>,
  ) {}

  async create(createTigerDto: CreateTigerDto): Promise<Tiger> {
    const tiger = this.tigersRepository.create(createTigerDto);
    return await this.tigersRepository.save(tiger);
  }

  async findAll(): Promise<Tiger[]> {
    return await this.tigersRepository.find();
  }

  async findOne(id: string): Promise<Tiger> {
    const tiger = await this.tigersRepository.findOneBy({ id });
    if (!tiger) {
      throw new NotFoundException(`Tiger with ID ${id} not found`);
    }
    return tiger;
  }

  async update(id: string, updateTigerDto: UpdateTigerDto): Promise<Tiger> {
    const tiger = await this.findOne(id);
    const updatedTiger = this.tigersRepository.merge(tiger, updateTigerDto);
    return await this.tigersRepository.save(updatedTiger);
  }

  async remove(id: string): Promise<void> {
    const result = await this.tigersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tiger with ID ${id} not found`);
    }
  }
}
