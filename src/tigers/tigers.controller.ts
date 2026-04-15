import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TigersService } from './tigers.service';
import { CreateTigerDto } from './dto/create-tiger.dto';
import { UpdateTigerDto } from './dto/update-tiger.dto';

@Controller('tigers')
export class TigersController {
  constructor(private readonly tigersService: TigersService) {}

  @Post()
  create(@Body() createTigerDto: CreateTigerDto) {
    return this.tigersService.create(createTigerDto);
  }

  @Get()
  findAll() {
    return this.tigersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tigersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTigerDto: UpdateTigerDto) {
    return this.tigersService.update(id, updateTigerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tigersService.remove(id);
  }
}
