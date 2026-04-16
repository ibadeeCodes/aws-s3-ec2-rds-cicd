import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CowsService } from './cows.service';
import { CreateCowDto } from './dto/create-cow.dto';
import { UpdateCowDto } from './dto/update-cow.dto';

@Controller('cows')
export class CowsController {
  constructor(private readonly cowsService: CowsService) {}

  @Post()
  create(@Body() createCowDto: CreateCowDto) {
    return this.cowsService.create(createCowDto);
  }

  @Get()
  findAll() {
    return this.cowsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cowsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCowDto: UpdateCowDto) {
    return this.cowsService.update(id, updateCowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cowsService.remove(id);
  }
}
