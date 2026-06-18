import { Controller } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Get, Post, Body } from '@nestjs/common';
import { CreatePersonaDto } from './create-persona.dto';

@Controller('personas')
export class PersonasController {
  public constructor(private readonly personasService: PersonasService) {}

  @Get()
  public findAll(): string {
    return this.personasService.getAll();
  }
  @Post()
  public create(@Body() dto: CreatePersonaDto): string {
    return this.personasService.createPersona(dto);
  }
}
