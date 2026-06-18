import { Controller } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Get, Post, Body } from '@nestjs/common';
import { CreatePersonaDto } from './create-persona.dto';
import { Persona } from './persona.entity';

@Controller('personas')
export class PersonasController {
  public constructor(private readonly personasService: PersonasService) {}

  @Get()
  public findAll(): Promise<Persona[]> {
    return this.personasService.getAll();
  }
  @Post()
  public create(@Body() dto: CreatePersonaDto): Promise<Persona> {
    return this.personasService.createPersona(dto);
  }
}
