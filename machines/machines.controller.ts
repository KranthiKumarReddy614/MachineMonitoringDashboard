import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('machines')
@UseGuards(AuthGuard('jwt'))
export class MachinesController {
  constructor(private service: MachinesService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post(':id/update')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(Number(id), body);
  }
}
